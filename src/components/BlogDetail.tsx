import { useBlog } from "../hooks/useBlog";

type Props = {
  id: string | null;
};

export default function BlogDetail({ id }: Props) {
  if (!id) return <p>Select a blog</p>;

  const { data, isLoading, error } = useBlog(id);

  if (isLoading) return <p>Loading blog...</p>;
  if (error) return <p>Error loading blog</p>;
  if (!data) return null;

  return (
    <div className="space-y-4">
      <img src={data.coverImage} className="rounded-xl w-full" />
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="text-sm text-muted-foreground">{data.date}</p>
      <p>{data.content}</p>
    </div>
  );
}
