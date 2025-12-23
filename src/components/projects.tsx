import { dataProjects } from "../modules/project/data";
import type { Project } from "../modules/project/type";
import type { ProjectStatus } from "../modules/project/type";
import { ProjectActions } from "./project-actions";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
    <div className="mt-6 grid grid-cols-4 gap-4">
      {status.map((status) => (
        <Card key={status} className="bg-stone-50">
          <CardHeader className="p-3 pb-0">
            <h3 className="text-center text-sm font-semibold text-gray-700">
              {status}
            </h3>
          </CardHeader>

          <CardContent className="space-y-3 p-3">
            <ul>
              {dataProjects
                .filter((project) => project.status === status)
                .map((project) => (
                  <li key={project.id}>
                    <ProjectItem project={project} />
                  </li>
                ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function ProjectItem({ project }: { project: Project }) {
  const projectCard = priorityColorMap[project.priority];
  return (
    <Card className={`h-40 ${projectCard}`}>
      <CardContent className="p-4 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="rounded-md bg-orange-100 px-2 py-0.5 text-[10px] font-medium text-red-400">
              {project.priority}
            </span>

            <span className="rounded-md bg-orange-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">
              {new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "numeric",
              }).format(project.dueDate)}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <button className="text-gray-500 hover:text-gray-800">
              <ProjectActions />
            </button>
          </div>
        </div>

        <h2 className="text-base font-semibold text-gray-800">
          {project.title}
        </h2>

        <p className="line-clamp-3 text-xs text-gray-600">
          {project.description}
        </p>
      </CardContent>
    </Card>
  );
}
