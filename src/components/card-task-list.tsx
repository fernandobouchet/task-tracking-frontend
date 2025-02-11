import { Heading, Card, Progress, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  data: TaskList;
}

const CardTaskList = ({ data }: Props) => {
  return (
    <Link to={`/task-lists/${data.id}`}>
      <Card.Root size="sm">
        <Card.Header>
          <Heading size="md">{data.title}</Heading>
        </Card.Header>
        <Card.Body color="fg.muted" gap="2" width="full">
          <Text>Tasks: {data.tasks?.length}</Text>
          <Progress.Root
            defaultValue={
              isNaN(data?.progress as number) || data?.progress == null
                ? 0
                : data.progress
            }
          >
            <HStack>
              <Progress.Track flex="1">
                <Progress.Range />
              </Progress.Track>
              <Progress.ValueText>
                {isNaN(data?.progress as number) || data?.progress == null
                  ? 0
                  : data.progress}{" "}
                / {data.count}
              </Progress.ValueText>
            </HStack>
          </Progress.Root>
        </Card.Body>
      </Card.Root>
    </Link>
  );
};

export { CardTaskList };
