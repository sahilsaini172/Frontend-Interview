import { Plus } from "lucide-react";
import { useBlogs } from "../hooks/useBlogs";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import CreateBlog from "./CreateBlog";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent, DialogTrigger } from "./ui/dialog";
import { useNavigate } from "react-router-dom";

type Props = {
  onSelect: (id: string) => void;
  isLaptop: boolean;
};

const BlogList = ({ onSelect, isLaptop }: Props) => {
  const { data, isLoading, error } = useBlogs();
  const navigate = useNavigate();

  if (isLoading)
    return <p className="text-sm text-muted-foreground">Loading...</p>;
  if (error)
    return <p className="test-sm text-destructive">Error loading blogs</p>;
  if (!data || data.length === 0)
    return <p className="text-sm text-muted-foreground">No Blogs yet.</p>;

  const handleSelect = (id: number) => {
    if (isLaptop) {
      onSelect(String(id));
    } else {
      navigate(`/blog/${id}`);
    }
  };

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex items-center justify-between">
        <h2 className="mt-4 font-semibold text-lg">Latest Blogs</h2>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"} size={"sm"}>
              <Plus />
              New Blog
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-152">
            <CreateBlog />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto overflow-x-visible flex-1 h-full">
        {data.map((blog) => (
          <Card
            key={blog.id}
            role="button"
            tabIndex={0}
            className="cursor-pointer hover:bg-secondary ease-in duration-150"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSelect(blog.id);
            }}
            onClick={() => {
              handleSelect(blog.id);
            }}
          >
            <CardHeader>
              <CardDescription>{blog.category.join(", ")}</CardDescription>
              <CardTitle>{blog.title}</CardTitle>
            </CardHeader>
            <CardContent className="-my-2">
              <p className="text-sm line-clamp-2 text-muted-foreground">
                {blog.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
