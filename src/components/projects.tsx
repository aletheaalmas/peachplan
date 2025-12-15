export type Project = {
  id: number;
  title: string;
  isDone: boolean;
  priority: "P1" | "P2" | "P3" | "P4";
  description: string;
};

export type Projects = Project[];

const dataProjects: Projects = [
  {
    id: 1,
    title: "Personal Web",
    isDone: true,
    priority: "P1",
    description: "Personal website with HTML & CSS",
  },
  {
    id: 2,
    title: "CRM",
    isDone: true,
    priority: "P2",
    description: "Simple CRM web using tailwind and JavaScript",
  },
  {
    id: 3,
    title: "Task Management",
    isDone: false,
    priority: "P3",
    description: "Project and task management using React",
  },
  {
    id: 4,
    title: "Information API",
    isDone: false,
    priority: "P3",
    description: "Soon",
  },
  {
    id: 5,
    title: "Simple Ecommerce",
    isDone: false,
    priority: "P4",
    description: "Soon",
  },
];

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
    </div>
  );
}
