export function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        <ProjectItem title="Personal Web" isDone/>
        <ProjectItem title="CRM" isDone/>
        <ProjectItem title="Task Management" isDone={false} />
        <ProjectItem title="Information API" isDone={false} />
        <ProjectItem title="Simple Ecommerce" isDone={false} />
        <ProjectItem title="Personal Project" isDone={false} />
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
