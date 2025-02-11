import { Button, HStack, Table, Text } from "@chakra-ui/react";
import { CiEdit } from "react-icons/ci";
import { NavLink, useParams } from "react-router-dom";
import { DeleteTaskAlertDialog } from "./delete-task-alert-dialog";
import { TaskStatusToggle } from "./task-status-toggle";

interface Props {
  tasks: Task[];
}

const TasksTable = ({ tasks }: Props) => {
  const { listId } = useParams();
  const items = tasks;

  const rows = items.map((item) => (
    <Table.Row key={item.id}>
      <Table.Cell>
        <TaskStatusToggle task={item} />
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
        <HStack flex="auto" justifyContent="space-evenly">
          <Button variant="ghost" padding="0" asChild>
            <NavLink to={`/task-lists/${listId}/edit-task/${item.id}`}>
              <CiEdit />
            </NavLink>
          </Button>
          <DeleteTaskAlertDialog taskId={item.id!} />
        </HStack>
      </Table.Cell>
    </Table.Row>
  ));

  return (
    <Table.ScrollArea borderWidth="1px" rounded="md" height="250px">
      <Table.Root stickyHeader>
        <Table.Header>
          <Table.Row>
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
