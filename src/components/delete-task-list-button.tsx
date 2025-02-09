import { useDeleteTaskList } from "@/hooks/useTaskList";
import { Button } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteTaskListButton = () => {
  const navigate = useNavigate();
  const { listId } = useParams();

  const deleteTaskList = useDeleteTaskList();

  const handleOnClick = async () => {
    deleteTaskList.mutate(listId!, {
      onSuccess: () => navigate("/"),
    });
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

export { DeleteTaskListButton };
