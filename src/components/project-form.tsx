import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FieldLabel } from "@/components/ui/field";
import { SelectDate } from "./select-date";
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
import { useState } from "react";
import { initialDataProjects } from "@/modules/project/data";
import type { Project } from "../modules/project/type";

export function ProjectForm() {
  const [projects, setProjects] = useState(initialDataProjects);

  function handleAddProject() {
    const newProject: Project = {
      id: 11,
      title: "Example Project",
      status: "To Do",
      priority: "P1",
      description: "just an example",
      dueDate: new Date(),
    };

    const updatedProjects = [...projects, newProject];

    setProjects(updatedProjects);
  }

  return (
    <Card className="rounded-2x p-6">
      <form className="space-y-4">
        <FieldLabel>Project Name</FieldLabel>
        <Input placeholder="Name your project" />
        <FieldLabel>Project Description</FieldLabel>
        <Textarea
          placeholder="Add some notes or description..."
          className="min-h-[120px]"
        />

        <div className="flex gap-2">
          <SelectDate />
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
          <Button type="submit" onClick={handleAddProject}>
            + Add Project
          </Button>
        </div>
      </form>
    </Card>
  );
}
