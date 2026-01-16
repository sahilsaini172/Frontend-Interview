// pages/BlogDetailPage.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useBlog } from "../hooks/useBlog";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { BlogDetailSkeleton } from "@/components/skeletons/BlogDetailSkeleton";

export default function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useBlog(id ?? null);
  const navigate = useNavigate();

  if (isLoading) {
    return <BlogDetailSkeleton />;
  }

  if (error) {
    return <p className="p-4 text-sm text-destructive">Failed to load blog</p>;
  }

  if (!data) return null;

  return (
    <div className="flex flex-col gap-2 p-4">
      <Button variant={"ghost"} className="w-fit" onClick={() => navigate("/")}>
        <ChevronLeft />
        Back
      </Button>
      <img
        src={data.coverImage}
        className="rounded-xl w-full aspect-video object-cover"
      />
      <h1 className="text-2xl font-bold mt-4">{data.title}</h1>
      <p className="leading-relaxed whitespace-pre-line">{data.content}</p>
    </div>
  );
}
