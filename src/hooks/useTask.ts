import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask, deleteTaskById, updateTask } from "@/lib/actions";

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

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, taskId }: { id: string; taskId: string }) =>
      deleteTaskById(id, taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["taskLists"] });
    },
  });
};
