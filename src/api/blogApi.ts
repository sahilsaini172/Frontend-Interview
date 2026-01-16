import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
});

export type Blog = {
  id: number;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
};

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await api.get("/blogs");
  return res.data;
};
