import { useQuery } from "@tanstack/react-query";
import { api, type Blog } from "../api/blogApi";

export const getBlogById = async (id: string): Promise<Blog> => {
  const {data} = await api.get<Blog>(`/blogs/${id}`);
  return data;
};

export const useBlog = (id: string | null) => {
  return useQuery<Blog, Error>({
    queryKey: ["blog", id],
    queryFn: () => {
      if (!id) throw new Error('Blog Id is Required');
      return getBlogById(id)
    },
    enabled: Boolean(id),
    staleTime: 1000*60,
  });
};
