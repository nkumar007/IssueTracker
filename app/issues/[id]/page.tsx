import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import {Card, Flex, Heading} from "@radix-ui/themes";
import {notFound} from "next/navigation";
import React from "react";

interface Props {
  params: {id: string};
}

const IssueDetailsPage = async ({params}: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {id: parseInt(params.id)},
  });

  if (!issue) notFound();
  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex className="space-x-3" my="2">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.description}</p>
      </Flex>
      <Card>
        <p>{issue.createdAt.toString()}</p>
      </Card>
    </div>
  );
};

export default IssueDetailsPage;
