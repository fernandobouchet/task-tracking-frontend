import { api } from "./api";

export const fetchTaskLists = async (): Promise<TaskList[]> => {
  try {
    const response = await api.get("/task-lists");
    console.log(response.data);

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
    console.error("Error al obtener las listas de tareas:", error);
    throw error;
  }
};
