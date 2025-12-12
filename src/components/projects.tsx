const dataProjects = [
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
            <ProjectItem
              title={project.title}
              isDone={project.isDone}
              priority={project.priority}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectItem({
  title,
  isDone,
  priority,
}: {
  title: string;
  isDone: boolean;
  priority: string;
}) {
  if (isDone) {
    return null;
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>{priority}</p>
    </div>
  );
}
