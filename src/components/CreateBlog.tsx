import { useState, type ChangeEvent } from "react";
import { useCreateBlog } from "../hooks/useCreateBlog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { DialogFooter, DialogHeader } from "./ui/dialog";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";

export default function CreateBlog() {
  const { mutate, isPending } = useCreateBlog();
  const [form, setForm] = useState({
    title: "",
    description: "",
    content: "",
    coverImage: "",
    category: "",
  });

  const isValid =
    form.title.trim() &&
    form.description.trim() &&
    form.content.trim() &&
    form.coverImage.trim() &&
    form.category.trim();

  const handleChange =
    (key: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = () => {
    if (!isValid || isPending) return;
    mutate(
      {
        title: form.title.trim(),
        description: form.description.trim(),
        content: form.content.trim(),
        coverImage: form.coverImage.trim(),
        category: form.category.split(",").map((c) => c.trim()),
        date: new Date().toISOString(),
      },
      {
        onSuccess: () => {
          setForm({
            title: "",
            description: "",
            content: "",
            coverImage: "",
            category: "",
          });
        },
      }
    );
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Create New Blog</DialogTitle>
        <p className="text-sm text-muted-foreground">
          Share your valuable knowledge in a blog.
        </p>
      </DialogHeader>
      <div className="flex flex-col gap-2">
        <Input placeholder="Title" onChange={handleChange("title")} />
        <Input
          placeholder="Categories (comma)"
          onChange={handleChange("category")}
        />
        <Input
          placeholder="Cover Image URL"
          onChange={handleChange("coverImage")}
        />
        <Input
          placeholder="Description"
          onChange={handleChange("description")}
        />
        <Textarea placeholder="Content" onChange={handleChange("content")} />
      </div>
      <DialogFooter className="flex flex-col w-full">
        <DialogClose asChild>
          <Button
            aria-label="Submit"
            className="w-full cursor-pointer"
            type="submit"
            variant={!isValid ? "secondary" : "default"}
            onClick={handleSubmit}
            disabled={!isValid || isPending}
          >
            {!isValid ? "Fill all the details" : "Create"}
          </Button>
        </DialogClose>
      </DialogFooter>
    </>
  );
}
