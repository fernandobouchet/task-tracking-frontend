import { Button, Fieldset, HStack, Input, Textarea } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { useState } from "react";
import { toaster } from "./ui/toaster";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "./back-button";
import { useTaskLists } from "@/hooks/useTaskList";
import { useCreateTask, useUpdateTask } from "@/hooks/useTask";

enum TaskPriority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
}

enum TaskStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

const NewTaskForm = () => {
  const navigate = useNavigate();
  const { listId, taskId } = useParams();

  const { data: taskLists } = useTaskLists();

  const taskListToEdit = taskLists?.find(
    (task: TaskList) => task.id === listId
  );

  const taskToEdit = taskListToEdit?.tasks?.find(
    (task: Task) => task.id === taskId
  );

  const createTask = useCreateTask(listId!);
  const updateTask = useUpdateTask();

  const [task, setTask] = useState<NewTaskForm>({
    title: taskToEdit ? taskToEdit.title : "",
    description: taskToEdit ? taskToEdit.description : "",
    dueDate: taskToEdit ? taskToEdit.dueDate : undefined,
    priority: taskToEdit ? taskToEdit.priority : TaskPriority.MEDIUM,
    status: taskToEdit ? taskToEdit.status : TaskStatus.OPEN,
  });

  const handleTaskListChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toaster.promise(createTask.mutateAsync(task), {
      success: () => {
        navigate(`/task-lists/${listId}`);
        return { title: "Successfully created task!" };
      },
      error: {
        title: "Failed to create task",
        description: "Something wrong creating the task",
      },
      loading: { title: "Creating task...", description: "Please wait" },
    });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    toaster.promise(
      updateTask.mutateAsync({
        id: listId!,
        taskId: taskToEdit!.id!,
        data: {
          ...taskToEdit,
          id: taskToEdit!.id!,
          title: task.title,
          description: task.description,
          dueDate: task.dueDate,
          priority: task.priority,
          status: task.status,
        },
      }),
      {
        success: () => {
          navigate(`/task-lists/${listId}`);
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
    <form onSubmit={taskToEdit ? handleUpdate : handleSubmit} className="form">
      <Fieldset.Root size="lg" maxW="lg" margin="auto">
        <Fieldset.Content>
          <Field label="Title" required>
            <Input
              name="title"
              onChange={handleTaskListChange}
              defaultValue={taskToEdit ? taskToEdit.title : ""}
              placeholder="Enter a task list title"
            />
          </Field>

          <Field label="Task description">
            <Textarea
              name="description"
              onChange={handleTaskListChange}
              defaultValue={taskToEdit ? taskToEdit.description : ""}
              placeholder="Enter task list description"
            />
          </Field>
          <Field label="Due Date">
            <input
              name="dueDate"
              type="date"
              id="datePicker"
              defaultValue={
                taskToEdit?.dueDate
                  ? new Date(taskToEdit.dueDate).toISOString().split("T")[0]
                  : undefined
              }
              onChange={handleTaskListChange}
            />
          </Field>
          <Field label="Task description">
            <HStack width="100%" justifyContent="space-between">
              {[TaskPriority.LOW, TaskPriority.MEDIUM, TaskPriority.HIGH].map(
                (option) => (
                  <label key={option} className="radio-button">
                    <input
                      type="radio"
                      name="priority"
                      value={option}
                      checked={task.priority === option}
                      onChange={handleTaskListChange}
                    />
                    <span> {option}</span>
                  </label>
                )
              )}
            </HStack>
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

export { NewTaskForm };
