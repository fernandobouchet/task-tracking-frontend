interface Task {
  id: string | undefined;
  title: string;
  description: string;
  dueDate: Date | undefined;
  priority: TaskPriority;
  status: TaskStatus | undefined;
}

interface TaskList {
  id: string | undefined;
  title: string;
  description: string | undefined;
  count: number | undefined;
  progress: number | undefined;
  tasks: Task[] | undefined;
}

type NewTaskListForm = Pick<TaskList, "title" | "description">;

type NewTaskForm = Pick<
  Task,
  "title" | "description" | "dueDate" | "priority" | "status"
>;

enum TaskPriority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
}

enum TaskStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}
