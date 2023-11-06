import {IssueStatusBadge} from "@/app/components";
import {Issue} from "@prisma/client";
import {Heading, Flex, Card} from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({issue}: {issue: Issue}) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex className="space-x-3" my="2">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </Flex>
      <Card className="prose max-w-full" mt="3">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
