import { dataProjects } from "../modules/project/data";
import type { Project } from "../modules/project/type";

export function Projects() {
  return (
    <div className="mt-6 flex rounded-2xl border border-gray-200 p-6">
      <ul className="flex flex-wrap gap-4">
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
    <div className="m-2 rounded-2xl bg-red-100 p-4 text-xs">
      <div className="flex items-center gap-2">
        <p className="rounded-md bg-orange-100 px-2 py-0.5 text-xs font-medium text-red-400">
          {project.priority}
        </p>
        <p className="rounded-md bg-orange-100 px-2 py-0.5 text-xs font-medium text-gray-600">
          {new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
          }).format(project.dueDate)}
        </p>
      </div>
      <h2 className="text-xl">{project.title}</h2>
      <p className="text-gray-500">{project.description}</p>
    </div>
  );
}
