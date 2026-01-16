import { useBlog } from "../hooks/useBlog";
import { Badge } from "./ui/badge";

type Props = {
  id: string | null;
};

export default function BlogDetail({ id }: Props) {
  const { data, isLoading, error } = useBlog(id!);

  if (isLoading)
    return <p className="text-sm text-muted-foreground">Loading blog...</p>;
  if (error)
    return <p className="text-sm text-destructive">Error loading blog</p>;
  if (!data) return null;

  return (
    <div className="space-y-4">
      <img
        src={data.coverImage}
        alt={data.title}
        className="rounded-xl w-full aspect-video object-cover"
        loading="lazy"
      />
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <div className="text-sm flex items-center gap-2 overflow-x-auto text-muted-foreground">
        {data.category.map((item) => (
          <Badge key={item} variant={"secondary"}>
            {item}
          </Badge>
        ))}{" "}
        | {data.date}
      </div>
      <p className="font-medium">{data.description}</p>
      <p className="leading-relaxed whitespace-pre-line">{data.content}</p>
    </div>
  );
}
