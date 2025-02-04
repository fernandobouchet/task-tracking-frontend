import { Button, Fieldset, Input, Textarea } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useState } from "react";
import { createTaskList } from "@/lib/actions";
import { toaster } from "./ui/toaster";
import { useNavigate } from "react-router-dom";

const TaskListForm = () => {
  const navigate = useNavigate();

  const [taskList, setTaskList] = useState<NewTaskListForm>({
    title: "",
    description: "",
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

    toaster.promise(createTaskList(taskList), {
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

  return (
    <form onSubmit={handleSubmit} className="form">
      <Fieldset.Root size="lg" maxW="lg" margin="auto">
        <Fieldset.Content>
          <Field label="Title" required>
            <Input
              name="title"
              onChange={handleTaskListChange}
              placeholder="Enter a task list title"
            />
          </Field>

          <Field label="Task description">
            <Textarea
              name="description"
              onChange={handleTaskListChange}
              placeholder="Enter task list description"
            />
          </Field>
        </Fieldset.Content>
        <Fieldset.ErrorText>
          Some fields are invalid. Please check them.
        </Fieldset.ErrorText>
        <Button
          type="submit"
          colorPalette="teal"
          variant="solid"
          rounded="full"
          minW="xs"
          maxW="lg"
          alignSelf="center"
        >
          Create
        </Button>
      </Fieldset.Root>
    </form>
  );
};

export { TaskListForm };
