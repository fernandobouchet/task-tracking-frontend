import { CardTaskList } from "@/components/card-task-list";
import { fetchTaskLists } from "@/lib/actions";
import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [tasksList, setTasksList] = useState<TaskList[]>();

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTaskLists();
      setTasksList(data);
    };

    getTasks();
  }, []);

  return (
    <Container padding="2rem">
      <Flex gap="4" direction="column" align="center">
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          My task list
        </Heading>
        <Container>
          <Flex gap="5" direction="column" align="center">
            <Button
              fontSize="xl"
              size="xl"
              colorPalette="teal"
              variant="solid"
              rounded="full"
              width="1/2"
              asChild
            >
              <NavLink to="/new-task-list">New task list</NavLink>
            </Button>
            <Stack width={{ base: "sm", sm: "xl" }}>
              {tasksList ? (
                tasksList?.map((e) => <CardTaskList key={e.id} data={e} />)
              ) : (
                <Center>
                  <Spinner size="xl" />
                </Center>
              )}
            </Stack>
          </Flex>
        </Container>
      </Flex>
    </Container>
  );
};
export { Home };
