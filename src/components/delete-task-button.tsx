import { useDeleteTask } from "@/hooks/useTask";
import { Button } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteTaskButton = ({ taskId }: { taskId: string }) => {
  const navigate = useNavigate();
  const { listId } = useParams();

  const deleteTask = useDeleteTask();

  const handleOnClick = async () => {
    deleteTask.mutate(
      { id: listId!, taskId: taskId! },
      {
        onSuccess: () => navigate(`/task-lists/${listId}`),
      }
    );
  };

  return (
    <Button
      colorPalette="red"
      variant="solid"
      rounded="full"
      onClick={handleOnClick}
    >
      Delete
    </Button>
  );
};

export { DeleteTaskButton };
