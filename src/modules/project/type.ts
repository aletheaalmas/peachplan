export type ProjectStatus = "To Do" | "In Progress" | "In Review" | "Done";
export type Project = {
  id: number;
  title: string;
  status: ProjectStatus;
  priority: "P1" | "P2" | "P3" | "P4";
  description: string;
  dueDate: Date;
};

export type Projects = Project[];
