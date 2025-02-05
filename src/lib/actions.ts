import { api } from "./api";

export const fetchTaskLists = async (): Promise<TaskList[]> => {
  try {
    const response = await api.get("/task-lists");
    return response.data;
  } catch (error) {
    console.error("Error al obtener las listas de tareas:", error);
    throw error;
  }
};

export const createTaskList = async (
  data: NewTaskListForm
): Promise<TaskList> => {
  try {
    const response = await api.post("/task-lists", {
      title: data.title,
      description: data.description,
    });

    return response.data;
  } catch (error) {
    console.error("Error al crear la lista de tareas:", error);
    throw error;
  }
};

export const getTaskListById = async (id: string): Promise<TaskList> => {
  try {
    const response = await api.get(`/task-lists/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener la lista de tareas:", error);
    throw error;
  }
};

export const deleteTaskListById = async (id: string): Promise<TaskList> => {
  try {
    const response = await api.delete(`/task-lists/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar la lista de tareas:", error);
    throw error;
  }
};

export const updateTaskList = async (
  data: NewTaskListForm,
  id: string
): Promise<TaskList> => {
  try {
    const response = await api.put(`/task-lists/${id}`, {
      title: data.title,
      description: data.description,
    });

    return response.data;
  } catch (error) {
    console.error("Error al actualizar la lista de tareas:", error);
    throw error;
  }
};
