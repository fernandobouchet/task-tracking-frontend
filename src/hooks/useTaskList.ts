import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchTaskLists,
  getTaskListById,
  createTaskList,
  updateTaskList,
  deleteTaskListById,
} from "@/lib/actions";

export const useTaskLists = () => {
  return useQuery({
    queryKey: ["taskLists"],
    queryFn: fetchTaskLists,
  });
};

export const useTaskList = (id: string) => {
  return useQuery({
    queryKey: ["taskLists", id],
    queryFn: () => getTaskListById(id),
    enabled: !!id,
  });
};

export const useCreateTaskList = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTaskList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["taskLists"] });
    },
  });
};

export const useUpdateTaskList = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: TaskList }) =>
      updateTaskList(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["taskLists"] });
    },
  });
};

export const useDeleteTaskList = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTaskListById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["taskLists"] });
    },
  });
};
