import { useState } from "react";
import { useCreateBlog } from "../hooks/useCreateBlog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function CreateBlog() {
  const { mutate, isPending } = useCreateBlog();
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    coverImage: "",
    category: "",
  });

  const submit = () => {
    mutate({
      title: form.title,
      description: form.description,
      content: form.content,
      coverImage: form.coverImage,
      category: form.category.split(","),
      date: new Date().toISOString(),
    });
  };

  return (
    <div className="space-y-2 mb-4">
      <Input placeholder="Title" onChange={e => setForm({...form, title:e.target.value})} />
      <Input placeholder="Categories (comma)" onChange={e => setForm({...form, category:e.target.value})} />
      <Input placeholder="Cover Image URL" onChange={e => setForm({...form, coverImage:e.target.value})} />
      <Input placeholder="Description" onChange={e => setForm({...form, description:e.target.value})} />
      <textarea
        className="w-full border rounded p-2"
        placeholder="Content"
        onChange={e => setForm({...form, content:e.target.value})}
      />
      <Button onClick={submit} disabled={isPending}>
        {isPending ? "Saving..." : "Create Blog"}
      </Button>
    </div>
  );
}
