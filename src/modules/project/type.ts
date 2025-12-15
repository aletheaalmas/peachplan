export type Project = {
  id: number;
  title: string;
  isDone: boolean;
  priority: "P1" | "P2" | "P3" | "P4";
  description: string;
  dueDate: Date;
};

export type Projects = Project[];