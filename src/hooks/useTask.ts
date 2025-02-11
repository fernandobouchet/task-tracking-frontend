import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createTask,
  deleteTaskById,
  updateTask,
  updateTaskStatus,
} from "@/lib/actions";

export const useCreateTask = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: NewTaskForm) => {
      return createTask(id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["taskLists"] });
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      taskId,
      data,
    }: {
      id: string;
      taskId: string;
      data: Task;
    }) => updateTask(id, taskId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["taskLists"] });
    },
  });
};

export const useUpdateTaskStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      taskId,
      data,
    }: {
      id: string;
      taskId: string;
      data: Task;
    }) => updateTaskStatus(id, taskId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["taskLists"] });
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTaskById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["taskLists"] });
    },
  });
};
