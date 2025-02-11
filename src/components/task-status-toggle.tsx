import { useUpdateTaskStatus } from "@/hooks/useTask";
import { Button } from "@chakra-ui/react";
import { LuSquare, LuSquareCheck } from "react-icons/lu";
import { useParams } from "react-router-dom";

const TaskStatusToggle = ({ task }: { task: Task }) => {
  const { listId } = useParams();

  const updateTaskStatus = useUpdateTaskStatus();

  const handleOnClick = async () => {
    updateTaskStatus.mutate({
      id: listId!,
      taskId: task.id!,
      data: task,
    });
  };

  return (
    <Button variant="ghost" padding="0" onClick={handleOnClick}>
      {task.status === "OPEN" ? <LuSquare /> : <LuSquareCheck />}
    </Button>
  );
};

export { TaskStatusToggle };
