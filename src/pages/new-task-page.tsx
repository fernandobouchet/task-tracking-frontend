import { NewTaskForm } from "@/components/new-task-form";
import { Container, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const NewTaskPage = () => {
  const { taskId } = useParams();

  return (
    <Container padding="2rem">
      <Flex gap="4" direction="column" align="center">
        <Text fontSize={{ base: "2xl", sm: "4xl" }}>
          {taskId ? "Update" : "Create a new "} task
        </Text>
        <NewTaskForm />
      </Flex>
    </Container>
  );
};

export { NewTaskPage };
