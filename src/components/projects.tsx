import { dataProjects } from "../modules/project/data";
import type { Project } from "../modules/project/type";
import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";

export function Projects() {
  return (
    <div className="mt-6 rounded-2xl border border-gray-200 p-6">
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-6">
        {dataProjects.map((project) => (
          <li key={project.id}>
            <ProjectItem project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectItem({ project }: { project: Project }) {
  if (project.isDone) {
    return null;
  }

  return (
    <div className="h-40 w-54 rounded-2xl bg-red-100 p-4 text-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-orange-100 px-2 py-0.5 text-xs font-medium text-red-400">
            {project.priority}
          </span>

          <span className="rounded-md bg-orange-100 px-2 py-0.5 text-xs font-medium text-gray-600">
            {new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "numeric",
            }).format(project.dueDate)}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <button className="hover:text-gray-800">
            <Pencil size={14} />
          </button>
          <button className="hover:text-red-500">
            <Trash size={14} />
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
