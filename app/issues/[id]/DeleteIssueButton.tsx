"use client";
import {AlertDialog, Button, Flex} from "@radix-ui/themes";
import axios from "axios";
import {useRouter} from "next/navigation";

const DeleteIssueButton = ({IssueId}: {IssueId: number}) => {
  const router = useRouter();
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Delete Issue</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirmation of Delete Issue</AlertDialog.Title>
        <AlertDialog.Description>
          Are you sure you want to delete this Issue?
        </AlertDialog.Description>
        <Flex gap="3" mt="3">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button
              color="red"
              onClick={async () => {
                await axios.delete("/api/issues/" + IssueId);
                router.push("/issues");
                router.refresh();
              }}
            >
              Delete
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
