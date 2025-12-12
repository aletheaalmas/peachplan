export type Project = {
  id: number;
  title: string;
  isDone: boolean;
  priority: "p1" | "p2" | "p3" | "p4";
  dueDate: Date;
};

export type Projects = Project[];
