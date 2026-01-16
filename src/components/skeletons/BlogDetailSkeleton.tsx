// components/BlogDetailSkeleton.tsx
import { Skeleton } from "../ui/skeleton";

export function BlogDetailSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-56 w-full rounded-xl" />
      <Skeleton className="h-8 w-2/3" />
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}
