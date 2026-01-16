import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { getBlogs, type Blog } from "../api/blogApi";

export const useBlogs = ():UseQueryResult<Blog[],Error> => {
  return useQuery<Blog[], Error>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    staleTime: 1000*60,
  });
};
