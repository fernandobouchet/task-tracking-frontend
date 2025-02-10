import { Button, Fieldset, HStack, Input, Textarea } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useState } from "react";
import { toaster } from "./ui/toaster";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "./back-button";
import {
  useCreateTaskList,
  useTaskLists,
  useUpdateTaskList,
} from "@/hooks/useTaskList";

const TaskListForm = () => {
  const navigate = useNavigate();
  const { listId } = useParams();

  const { data: taskLists } = useTaskLists();

  const taskListToEdit = taskLists?.find(
    (task: TaskList) => task.id === listId
  );

  const createTaskList = useCreateTaskList();
  const updateTaskList = useUpdateTaskList();

  const [taskList, setTaskList] = useState<NewTaskListForm>({
    title: taskListToEdit ? taskListToEdit.title : "",
    description: taskListToEdit ? taskListToEdit?.description : "",
  });

  const handleTaskListChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTaskList((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toaster.promise(createTaskList.mutateAsync(taskList), {
      success: (data) => {
        const taskId = data.id;
        navigate(`/task-lists/${taskId}`);
        return { title: "Successfully created task list!" };
      },
      error: {
        title: "Failed to create task list",
        description: "Something wrong creating the task list",
      },
      loading: { title: "Creating task list...", description: "Please wait" },
    });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    toaster.promise(
      updateTaskList.mutateAsync({
        id: listId!,
        data: {
          ...taskListToEdit!,
          title: taskList.title,
          description: taskList.description,
        },
      }),
      {
        success: (data) => {
          const taskId = data.id;
          navigate(`/task-lists/${taskId}`);
          return { title: "Successfully updated task list!" };
        },
        error: {
          title: "Failed to update task list",
          description: "Something wrong updating the task list",
        },
        loading: { title: "Updating task list...", description: "Please wait" },
      }
    );
  };

  return (
    <form
      onSubmit={taskListToEdit ? handleUpdate : handleSubmit}
      className="form"
    >
      <Fieldset.Root size="lg" maxW="lg" margin="auto">
        <Fieldset.Content>
          <Field label="Title" required>
            <Input
              name="title"
              onChange={handleTaskListChange}
              defaultValue={taskListToEdit ? taskListToEdit.title : ""}
              placeholder="Enter a task list title"
            />
          </Field>

          <Field label="Task description">
            <Textarea
              name="description"
              onChange={handleTaskListChange}
              defaultValue={taskListToEdit ? taskListToEdit.description : ""}
              placeholder="Enter task list description"
            />
          </Field>
        </Fieldset.Content>
        <Fieldset.ErrorText>
          Some fields are invalid. Please check them.
        </Fieldset.ErrorText>
        <HStack justify="space-between" gap="5">
          <BackButton />
          <Button
            type="submit"
            fontSize="lg"
            size="lg"
            colorPalette="teal"
            variant="solid"
            rounded="full"
          >
            Save
          </Button>
        </HStack>
      </Fieldset.Root>
    </form>
  );
};

export { TaskListForm };
