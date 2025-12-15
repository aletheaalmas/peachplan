import { dataProjects } from "../modules/project/data";
import type { Project } from "../modules/project/type";

export function Projects() {
  return (
    <div>
      <h1>Projects</h1>
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
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>{project.priority}</p>
      <p>
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }).format(project.dueDate)}
      </p>
    </div>
  );
}
