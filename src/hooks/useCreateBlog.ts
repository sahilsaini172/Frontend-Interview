import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type Blog } from "../api/blogApi";

export const useCreateBlog = () => {
  const qc = useQueryClient();

  return useMutation<Blog, Error, Omit<Blog, "id">>({
    mutationFn: async (data) => {
      const res = await api.post("/blogs", data);
      return res.data;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};
