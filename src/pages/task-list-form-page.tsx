import { TaskListForm } from "@/components/task-list-form";
import { Container, Flex, Text } from "@chakra-ui/react";

const TaskListFormPage = () => {
  return (
    <Container padding="2rem">
      <Flex gap="4" direction="column" align="center">
        <Text fontSize={{ base: "2xl", sm: "4xl" }}>
          Create a new task list
        </Text>
        <TaskListForm />
      </Flex>
    </Container>
  );
};

export { TaskListFormPage };
