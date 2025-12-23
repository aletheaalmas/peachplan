import { dataProjects } from "../modules/project/data";
import type { Project } from "../modules/project/type";
import type { ProjectStatus } from "../modules/project/type";
import { ProjectActions } from "./project-actions";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const status: ProjectStatus[] = ["To Do", "In Progress", "In Review", "Done"];

const priorityColorMap: Record<Project["priority"], string> = {
  P0: "bg-red-200",
  P1: "bg-rose-100",
  P2: "bg-purple-100",
  P3: "bg-blue-100",
  P4: "bg-lime-100",
};

export function Projects() {
  return (
    <div className="mt-6 grid grid-cols-4 gap-4 items-start">
      {status.map((status) => (
        <div
          key={status}
          className="rounded-2xl border bg-stone-50 p-3"
        >
          <h3 className="mb-3 text-center text-sm font-semibold text-gray-700">
            {status}
          </h3>

          <ul className="space-y-3">
            {dataProjects
              .filter((project) => project.status === status)
              .map((project) => (
                <li key={project.id}>
                  <ProjectItem project={project} />
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function ProjectItem({ project }: { project: Project }) {
  const projectCard = priorityColorMap[project.priority]

  return (
    <Card className={`min-h-[140px] ${projectCard}`}>
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

          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6"
          >
            <ProjectActions />
          </Button>
        </div>


        <h2 className="mt-2 text-sm font-semibold leading-tight text-gray-800">
          {project.title}
        </h2>

        <p className="mt-1 line-clamp-3 text-xs leading-snug text-gray-600">
          {project.description}
        </p>
      </CardContent>
    </Card>
  )
}

