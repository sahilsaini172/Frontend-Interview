import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type Blog } from "../api/blogApi";

type CreateBlogInput = Omit<Blog,'id'>;

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation<Blog, Error, CreateBlogInput>({
    mutationFn: async (data) => {
      const {data:created} = await api.post<Blog>("/blogs", data);
      return created;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};
