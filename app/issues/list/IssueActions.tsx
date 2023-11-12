"use client";
import {Button, Flex} from "@radix-ui/themes";
import Link from "next/link";
import IssueFilterStatus from "./IssueFilterStatus";

const IssueActions = () => {
  return (
    <Flex mb="5" justify="between">
      <IssueFilterStatus />
      <Button>
        <Link href="/issues/new">IssuesPage</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
