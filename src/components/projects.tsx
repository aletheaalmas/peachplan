import { dataProjects } from "../modules/project/data";
import type { Project } from "../modules/project/type";

export function Projects() {
  return (
    <div>
      <h2>Projects</h2>
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
      <p>{project.priority}</p>
    </div>
  );
}
