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
import { CiTrash } from "react-icons/ci";
import { DeleteTaskButton } from "./delete-task-button";

const DeleteTaskAlertDialog = ({ taskId }: { taskId: string }) => {
  return (
    <DialogRoot role="alertdialog" placement="center">
      <DialogTrigger asChild>
        <Button variant="ghost" padding="0">
          <CiTrash />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>
            This action is irreversible. It will permanently delete the current
            task from our database.
          </p>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline" rounded="full">
              Cancel
            </Button>
          </DialogActionTrigger>
          <DeleteTaskButton taskId={taskId} />
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export { DeleteTaskAlertDialog };
