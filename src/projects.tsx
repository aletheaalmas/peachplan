const dataProjects = [
  { id: 1, title: "Personal Web", isDone: true },
  { id: 2, title: "CRM", isDone: true },
  { id: 3, title: "Task Management", isDone: false },
  { id: 4, title: "Information API", isDone: false },
  { id: 5, title: "Simple Ecommerce", isDone: false },
  { id: 6, title: "Personal Projects", isDone: false },
];

export function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {dataProjects.map((project) => (
          <ProjectItem title={project.title} isDone={project.isDone} />
        ))}
      </ul>
    </div>
  );
}

export function ProjectItem({
  title,
  isDone,
}: {
  title: string;
  isDone: boolean;
}) {
  if (isDone) {
    return null;
  }

  return <li>{title}</li>;
}
