import { Button, HStack, Table } from "@chakra-ui/react";

interface Props {
  tasks: Task[];
}

const TasksTable = ({ tasks }: Props) => {
  const items = tasks;

  const rows = items.map((item) => (
    <Table.Row key={item.id}>
      <Table.Cell></Table.Cell>
      <Table.Cell>{item.status}</Table.Cell>
      <Table.Cell>{item.title}</Table.Cell>
      <Table.Cell>{item.priority}</Table.Cell>
      <Table.Cell>{item.dueDate?.getDate()}</Table.Cell>
      <Table.Cell>
        <HStack>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </HStack>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader w="6"></Table.ColumnHeader>
          <Table.ColumnHeader>Completed</Table.ColumnHeader>
          <Table.ColumnHeader>Title</Table.ColumnHeader>
          <Table.ColumnHeader>Priority</Table.ColumnHeader>
          <Table.ColumnHeader>Due Date</Table.ColumnHeader>
          <Table.ColumnHeader>Actions</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>{rows}</Table.Body>
    </Table.Root>
  );
};

export { TasksTable };
