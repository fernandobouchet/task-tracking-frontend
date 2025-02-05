import { TaskListForm } from "@/components/task-list-form";
import { Container, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const TaskListFormPage = () => {
  const { listId } = useParams();

  return (
    <Container padding="2rem">
      <Flex gap="4" direction="column" align="center">
        <Text fontSize={{ base: "2xl", sm: "4xl" }}>
          {listId ? "Update" : "Create a new "} task list
        </Text>
        <TaskListForm />
      </Flex>
    </Container>
  );
};

export { TaskListFormPage };
