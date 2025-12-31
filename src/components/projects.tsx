import { initialDataProjects } from "../modules/project/data";
import type { Project } from "../modules/project/type";
import type { ProjectStatus } from "../modules/project/type";
import { ProjectActions } from "./project-actions";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const statuses: ProjectStatus[] = ["To Do", "In Progress", "In Review", "Done"];

const priorityColorMap: Record<Project["priority"], string> = {
  P0: "red",
  P1: "orange",
  P2: "purple",
  P3: "blue",
  P4: "lime",
};

// bg-red-200 bg-orange-200 bg-purple-200 bg-blue-200 bg-lime-200
// text-red-900 text-orange-900 text-purple-900 text-blue-900 text-lime-900

export function Projects() {
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

  function handleDeleteProject(id: number) {
    const updatedProjects = projects.filter((project) => project.id !== id);

    setProjects(updatedProjects);
  }

  return (
    <section className="space-y-2">
      <div>
        <Button onClick={handleAddProject}>Add Project Card</Button>
      </div>
      <ul className="grid grid-cols-4 items-start gap-4">
        {statuses.map((status) => (
          <div key={status} className="rounded-2xl border bg-stone-50 p-3">
            <h3 className="mb-3 text-center text-sm font-semibold text-gray-700">
              {status}
            </h3>

            <ul className="space-y-3">
              {projects
                .filter((project) => project.status === status)
                .map((project) => (
                  <li key={project.id}>
                    <ProjectItem
                      project={project}
                      onDelete={handleDeleteProject}
                    />
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </ul>
    </section>
  );
}

export function ProjectItem({
  project,
  onDelete,
}: {
  project: Project;
  onDelete: (id: number) => void;
}) {
  const projectCard = priorityColorMap[project.priority];

  return (
    <Card
      className={cn(
        "min-h-[140px]",
        projectCard ? `bg-${projectCard}-200 text-${projectCard}-900` : "",
      )}
    >
      <CardContent className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Badge
              variant="secondary"
              className="px-2 py-0 text-[10px] leading-4"
            >
              {project.priority}
            </Badge>

            <Badge
              variant="secondary"
              className="px-2 py-0 text-[10px] leading-4"
            >
              {new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "numeric",
              }).format(project.dueDate)}
            </Badge>
          </div>

          <ProjectActions onDelete={() => onDelete(project.id)} />
        </div>

        <h2 className="mt-2 text-sm leading-tight font-semibold">
          {project.title}
        </h2>

        <p className="mt-1 line-clamp-3 text-xs leading-snug">
          {project.description}
        </p>
      </CardContent>
    </Card>
  );
}
