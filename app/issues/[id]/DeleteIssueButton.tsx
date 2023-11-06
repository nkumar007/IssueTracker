"use client";
import {AlertDialog, Button, Flex} from "@radix-ui/themes";

const DeleteIssueButton = ({IssueId}: {IssueId: number}) => {
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
            <Button color="red">Delete</Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default DeleteIssueButton;
