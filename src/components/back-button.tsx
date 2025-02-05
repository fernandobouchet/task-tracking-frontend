import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      fontSize="lg"
      size="lg"
      colorPalette="teal"
      variant="solid"
      rounded="full"
      onClick={() => navigate(-1)}
    >
      Back
    </Button>
  );
};

export { BackButton };
