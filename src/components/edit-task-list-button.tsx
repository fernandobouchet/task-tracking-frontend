import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface Props {
  id: string;
}

const EditTaskListButton = ({ id }: Props) => {
  return (
    <Button
      fontSize="lg"
      size="lg"
      colorPalette="current"
      variant="solid"
      rounded="full"
      asChild
    >
      <NavLink to={`/edit-task-list/${id}`}>Edit</NavLink>
    </Button>
  );
};

export { EditTaskListButton };
