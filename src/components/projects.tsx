import { dataProjects } from "../modules/project/data";
import type { Project } from "../modules/project/type";
import type { ProjectStatus } from "../modules/project/type";
import { ProjectActions } from "./project-actions";
// import { Pencil } from "lucide-react";
// import { Trash } from "lucide-react";

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
        <div key={status} className="rounded-2xl border-2 border-gray-200 p-3">
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
    <div className={`h-40 rounded-2xl p-4 text-sm ${projectCard}`}>
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
          {/* <button className="hover:text-gray-800">
            <Pencil size={12} />
          </button>
          <button className="hover:text-red-500">
            <Trash size={12} /> */}
          <button className="text-gray-500 hover:text-gray-800">
            <ProjectActions />
          </button>
        </div>
      </div>

      <h2 className="mt-3 text-base font-semibold text-gray-800">
        {project.title}
      </h2>

      <p className="mt-1 line-clamp-3 text-xs text-gray-600">
        {project.description}
      </p>
    </div>
  );
}
