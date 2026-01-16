import { useState } from "react";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";

export default function Home({ isLaptop }: { isLaptop: boolean }) {
  const [selectedId, setSelectedId] = useState<string | null>("1");

  return (
    <div className="flex h-screen">
      <div className="flex h-full">
        <div className="p-2 bg-accent lg:p-4 md:w-2/5 lg:w-1/4 flex flex-col h-full gap-4 overflow-y-scroll w-full">
          <BlogList isLaptop={isLaptop} onSelect={setSelectedId} />
        </div>
        {isLaptop && (
          <div className="md:w-3/5 p-2 lg:-4 lg:w-3/4 overflow-y-auto">
            <BlogDetail id={selectedId} />
          </div>
        )}
      </div>
    </div>
  );
}
