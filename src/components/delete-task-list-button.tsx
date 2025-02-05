import { deleteTaskListById } from "@/lib/actions";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  id: string;
}

const DeleteTaskListButton = ({ id }: Props) => {
  const navigate = useNavigate();

  const handleOnClick = async () => {
    const data = await deleteTaskListById(id);
    if (!data) {
      navigate("/");
    }
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
      Delete
    </Button>
  );
};

export { DeleteTaskListButton };
