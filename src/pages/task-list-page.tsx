import { BackButton } from "@/components/back-button";
import { DeleteTaskListButton } from "@/components/delete-task-list-button";
import { EditTaskListButton } from "@/components/edit-task-list-button";
import { useTaskLists } from "@/hooks/useTaskList";
import {
  Center,
  Container,
  Flex,
  HStack,
  Progress,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const TaskListPage = () => {
  const { listId } = useParams();

  const { data: taskLists, isLoading } = useTaskLists();
  const taskList = taskLists?.find((task) => task.id === listId);

  return (
    <Container padding="2rem">
      <Flex
        gap="4"
        direction="column"
        margin="auto"
        width={{ base: "xs", sm: "lg" }}
      >
        {isLoading && !taskList ? (
          <Center>
            <Spinner size="xl" />
          </Center>
        ) : (
          <>
            <HStack justify="space-between">
              <BackButton />
              <Text fontSize={{ base: "2xl", sm: "4xl" }}>
                {taskList?.title}
              </Text>
              <EditTaskListButton id={listId!} />
            </HStack>
            <Progress.Root
              defaultValue={
                isNaN(taskList?.progress as number) ||
                taskList?.progress == null
                  ? 0
                  : taskList.progress * 100
              }
              width={{ base: "xs", sm: "lg" }}
            >
              <HStack>
                <Progress.Track flex="1">
                  <Progress.Range />
                </Progress.Track>
              </HStack>
            </Progress.Root>
            <DeleteTaskListButton id={listId!} />
          </>
        )}{" "}
      </Flex>
    </Container>
  );
};

export { TaskListPage };
