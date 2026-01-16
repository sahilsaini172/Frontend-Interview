import { Skeleton } from "../ui/skeleton";

const BlogListSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="space-y-2 p-4 border rounded-lg">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      ))}
    </div>
  );
};

export default BlogListSkeleton;
