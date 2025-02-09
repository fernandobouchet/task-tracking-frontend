import { Button } from "@chakra-ui/react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DeleteTaskListButton } from "./delete-task-list-button";

const DeleteDialogAlert = () => {
  return (
    <DialogRoot role="alertdialog" placement="center">
      <DialogTrigger asChild>
        <Button
          fontSize="lg"
          size="lg"
          colorPalette="red"
          variant="solid"
          rounded="full"
        >
          Delete Task List
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>
            This action is irreversible. It will permanently delete the current
            task list and remove all associated tasks from our database.
          </p>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline" rounded="full">
              Cancel
            </Button>
          </DialogActionTrigger>
          <DeleteTaskListButton />
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default DeleteDialogAlert;
