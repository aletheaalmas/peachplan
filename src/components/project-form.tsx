import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Project } from "@/modules/project/type";
import { useState } from "react";
import { initialDataProjects } from "@/modules/project/data";
import { Label } from "@/components/ui/label";

export function ProjectForm() {
  const [projects] = useState(initialDataProjects);

  function generateId(items: Project[]) {
    const newId = Text.length > 0 ? items[items.length - 1].id + 1 : 1;
    return newId;
  }

  function handleAddProject(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newProject = {
      id: generateId(projects),
      title: formData.get("title") as string,
      status: "To Do",
      priority: "P1",
      description: formData.get("description") as string,
      dueDate: new Date(),
    };

    console.log(newProject);
  }

  return (
    <Card className="rounded-2xl p-6">
      <form className="space-y-4" method="post" onSubmit={handleAddProject}>
        <Label htmlFor="title">Project Name</Label>
        <Input
          id="title"
          type="text"
          name="title"
          placeholder="Name your project"
        />

        <Label>Project Description</Label>
        <Textarea
          name="description"
          placeholder="Add some notes or description..."
          className="min-h-[120px]"
        />

        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Priority</SelectLabel>
                <SelectItem value="P0">P0</SelectItem>
                <SelectItem value="P1">P1</SelectItem>
                <SelectItem value="P2">P2</SelectItem>
                <SelectItem value="P3">P3</SelectItem>
                <SelectItem value="P4">P4</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="To Do">To Do</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="In Review">In Review</SelectItem>
                <SelectItem value="Done">Done</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-end">
          <Button type="submit">+ Add Project</Button>
        </div>
      </form>
    </Card>
  );
}
