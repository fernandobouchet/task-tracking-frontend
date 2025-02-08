import { Button, HStack, Table, Text } from "@chakra-ui/react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { LuSquare, LuSquareCheck } from "react-icons/lu";

interface Props {
  tasks: Task[];
}

const TasksTable = ({ tasks }: Props) => {
  const items = tasks;

  const rows = items.map((item) => (
    <Table.Row key={item.id}>
      <Table.Cell></Table.Cell>
      <Table.Cell>
        {item.status === "OPEN" ? <LuSquare /> : <LuSquareCheck />}
      </Table.Cell>
      <Table.Cell>
        <Text lineClamp={1}>{item.title}</Text>
      </Table.Cell>
      <Table.Cell>{item.priority}</Table.Cell>
      <Table.Cell hideBelow="md">
        <Text whiteSpace="nowrap" textAlign="center">
          {item.dueDate
            ? new Date(item?.dueDate).toLocaleDateString().split("T")[0]
            : "-"}
        </Text>
      </Table.Cell>
      <Table.Cell>
        <HStack>
          <Button variant="ghost" padding="0">
            <CiEdit />
          </Button>
          <Button variant="ghost" padding="0">
            <CiTrash />
          </Button>
        </HStack>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <Table.ScrollArea borderWidth="1px" rounded="md" height="250px">
      <Table.Root stickyHeader>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader w="6"></Table.ColumnHeader>
            <Table.ColumnHeader>Done</Table.ColumnHeader>
            <Table.ColumnHeader>Title</Table.ColumnHeader>
            <Table.ColumnHeader>Priority</Table.ColumnHeader>
            <Table.ColumnHeader hideBelow="md">Due Date</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">Actions</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
      </Table.Root>{" "}
    </Table.ScrollArea>
  );
};

export { TasksTable };
