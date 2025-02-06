import { useDeleteTaskList } from "@/hooks/useTaskList";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
}

const DeleteTaskListButton = ({ id }: Props) => {
  const navigate = useNavigate();

  const deleteTaskList = useDeleteTaskList();

  const handleOnClick = async () => {
    deleteTaskList.mutate(id, {
      onSuccess: () => navigate("/"),
    });
  };

  return (
    <Button
      fontSize="lg"
      size="lg"
      colorPalette="red"
      variant="solid"
      rounded="full"
      onClick={handleOnClick}
    >
      Delete Task List
    </Button>
  );
};

export { DeleteTaskListButton };
