import { dataProjects } from "../modules/project/data";
import type { Project } from "../modules/project/type";
import type { ProjectStatus } from "../modules/project/type";
import { ProjectActions } from "./project-actions";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const status: ProjectStatus[] = ["To Do", "In Progress", "In Review", "Done"];

const priorityColorMap: Record<Project["priority"], string> = {
  P0: "red",
  P1: "rose",
  P2: "purple",
  P3: "blue",
  P4: "lime",
};
// bg-red-100 bg-rose-100 bg-purple-100 bg-blue-100 bg-lime-100
// text-red-900 text-rose-900 text-purple-900 text-blue-900 text-lime-900

export function Projects() {
  return (
    <div className="mt-6 grid grid-cols-4 items-start gap-4">
      {status.map((status) => (
        <div key={status} className="rounded-2xl border bg-stone-50 p-3">
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
  );
}

export function ProjectItem({ project }: { project: Project }) {
  const projectCard = priorityColorMap[project.priority];

  return (
    <Card
      className={cn(
        "min-h-[140px] py-0",
        projectCard ? `bg-${projectCard}-100 text-${projectCard}-900` : "",
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

          <ProjectActions />
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
