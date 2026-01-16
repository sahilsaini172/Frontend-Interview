import { useQuery } from "@tanstack/react-query";
import { getBlogs, type Blog } from "../api/blogApi";

export const useBlogs = () => {
  return useQuery<Blog[], Error>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
};
