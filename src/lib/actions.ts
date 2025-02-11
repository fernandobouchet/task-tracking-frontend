import { api } from "./api";

export const fetchTaskLists = async (): Promise<TaskList[]> => {
  const response = await api.get("/task-lists");
  return response.data;
};

export const createTaskList = async (
  data: NewTaskListForm
): Promise<TaskList> => {
  const response = await api.post("/task-lists", data);
  return response.data;
};

export const getTaskListById = async (id: string): Promise<TaskList> => {
  const response = await api.get(`/task-lists/${id}`);
  return response.data;
};

export const deleteTaskListById = async (id: string): Promise<TaskList> => {
  const response = await api.delete(`/task-lists/${id}`);
  return response.data;
};

export const updateTaskList = async (
  id: string,
  data: TaskList
): Promise<TaskList> => {
  const response = await api.put(`/task-lists/${id}`, data);
  return response.data;
};

export const createTask = async (
  id: string,
  data: NewTaskForm
): Promise<Task> => {
  const response = await api.post(`/task-lists/${id}/tasks`, {
    ...data,
    dueDate: data.dueDate
      ? new Date(data.dueDate).toISOString().split(".")[0]
      : undefined,
  });

  return response.data;
};

export const deleteTaskById = async ({
  id,
  taskId,
}: {
  id: string;
  taskId: string;
}): Promise<Task> => {
  const response = await api.delete(`/task-lists/${id}/tasks/${taskId}`);
  return response.data;
};

export const updateTask = async (
  id: string,
  taskId: string,
  data: Task
): Promise<Task> => {
  const response = await api.put(`/task-lists/${id}/tasks/${taskId}`, {
    ...data,
    dueDate: data.dueDate
      ? new Date(data.dueDate).toISOString().split(".")[0]
      : undefined,
  });
  return response.data;
};

export const updateTaskStatus = async (
  id: string,
  taskId: string,
  data: Task
): Promise<Task> => {
  const response = await api.put(`/task-lists/${id}/tasks/${taskId}`, {
    ...data,
    status: data.status === "OPEN" ? "CLOSED" : "OPEN",
  });
  return response.data;
};
