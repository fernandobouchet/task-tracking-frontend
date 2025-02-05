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
