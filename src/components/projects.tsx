export type Project = {
  id: number;
  title: string;
  isDone: boolean;
  priority: "P1" | "P2" | "P3" | "P4";
  description: string;
  dueDate: Date;
};

export type Projects = Project[];

const dataProjects: Projects = [
  {
    id: 1,
    title: "Personal Web",
    isDone: true,
    priority: "P1",
    description: "Personal website with HTML & CSS",
    dueDate: new Date("2025-10-01"),
  },
  {
    id: 2,
    title: "CRM",
    isDone: true,
    priority: "P2",
    description: "Simple CRM web using tailwind and JavaScript",
    dueDate: new Date("2025-11-01"),
  },
  {
    id: 3,
    title: "Task Management",
    isDone: false,
    priority: "P3",
    description: "Project and task management using React",
    dueDate: new Date("2025-12-01"),
  },
  {
    id: 4,
    title: "Information API",
    isDone: false,
    priority: "P3",
    description: "Soon",
    dueDate: new Date("2026-1-01"),
  },
  {
    id: 5,
    title: "Simple Ecommerce",
    isDone: false,
    priority: "P4",
    description: "Soon",
    dueDate: new Date("2026-2-01"),
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
