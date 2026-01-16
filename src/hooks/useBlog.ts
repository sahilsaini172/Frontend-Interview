import { useQuery } from "@tanstack/react-query";
import { api, type Blog } from "../api/blogApi";

export const getBlogById = async (id: string): Promise<Blog> => {
  const res = await api.get(`/blogs/${id}`);
  return res.data;
};

export const useBlog = (id: string) => {
  return useQuery<Blog, Error>({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  });
};
