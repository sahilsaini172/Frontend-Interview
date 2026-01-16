import { useState } from "react";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetail";
import CreateBlog from "../components/CreateBlog";

export default function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 h-screen">
      <div className="border-r p-4 overflow-y-auto">
        <CreateBlog />
        <BlogList onSelect={setSelectedId} />
      </div>
      <div className="md:col-span-2 p-6 overflow-y-auto">
        <BlogDetail id={selectedId} />
      </div>
    </div>
  );
}
