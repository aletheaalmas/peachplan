export type Project = {
  id: number;
  title: string;
  isDone: boolean;
  priority: "p1" | "p2" | "p3" | "p4";
};

export type Projects = Project[];

const dataProjects: Projects = [
  { id: 1, title: "Personal Web", isDone: true, priority: "p1" },
  { id: 2, title: "Contact Management", isDone: true, priority: "p2" },
  { id: 3, title: "Task Management", isDone: false, priority: "p2" },
  { id: 4, title: "Information API", isDone: false, priority: "p3" },
  { id: 5, title: "Simple Ecommerce", isDone: false, priority: "p4" },
];

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
