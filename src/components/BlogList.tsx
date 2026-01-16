import { useBlogs } from "../hooks/useBlogs";
import { Card, CardContent } from "./ui/card";

type Props = {
  onSelect: (id: string) => void;
};

const BlogList = ({ onSelect }: Props) => {
  const { data, isLoading, error } = useBlogs();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading blogs</p>;
  if (!data) return null;

  return (
    <div className="space-y-3">
      {data.map((blog) => (
        <Card
          key={blog.id}
          className="cursor-pointer hover:bg-muted"
          onClick={() => onSelect(String(blog.id))}
        >
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground">
              {blog.category.join(", ")}
            </p>
            <h3 className="font-semibold">{blog.title}</h3>
            <p className="text-sm">{blog.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogList;
