import { dataProjects } from "../modules/project/data";
import type { Project } from "../modules/project/type";

export function Projects() {
  return (
    <div className="mt-6 flex flex-row rounded-lg border-2 border-gray-200 p-3">
      <ul>
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
      <div className="flex flex-row gap-3">
        <p className="p-2 rounded-lg  bg-orange-100 text-red-400">{project.priority}</p>
        <p className="p-2 rounded-lg  bg-orange-100 text-red-400">
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
