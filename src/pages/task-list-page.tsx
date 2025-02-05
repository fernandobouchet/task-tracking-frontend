import { BackButton } from "@/components/back-button";
import { DeleteTaskListButton } from "@/components/delete-task-list-button";
import { EditTaskListButton } from "@/components/edit-task-list-button";
import { getTaskListById } from "@/lib/actions";
import { Container, Flex, HStack, Progress, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TaskListPage = () => {
  const { listId } = useParams();

  const [taskList, setTaskList] = useState<TaskList | null>();

  useEffect(() => {
    const getTaskData = async () => {
      const task = await getTaskListById(listId as string);
      setTaskList(task);
    };
    getTaskData();
  }, [listId]);

  return (
    <Container padding="2rem">
      <Flex
        gap="4"
        direction="column"
        margin="auto"
        width={{ base: "xs", sm: "lg" }}
      >
        <HStack justify="space-between">
          <BackButton />
          <Text fontSize={{ base: "2xl", sm: "4xl" }}>{taskList?.title}</Text>
          <EditTaskListButton id={listId!} />
        </HStack>
        <Progress.Root
          defaultValue={taskList?.progress ? taskList?.progress * 100 : 0}
          width={{ base: "xs", sm: "lg" }}
        >
          <HStack>
            <Progress.Track flex="1">
              <Progress.Range />
            </Progress.Track>
          </HStack>
        </Progress.Root>
        <DeleteTaskListButton id={listId!} />
      </Flex>
    </Container>
  );
};

export { TaskListPage };
