import { Button } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

const NewTaskButton = () => {
  const { listId } = useParams();
  return (
    <Button rounded="full" asChild>
      <Link to={`/task-lists/${listId}/new-task`}>Add Task</Link>
    </Button>
  );
};

export { NewTaskButton };
