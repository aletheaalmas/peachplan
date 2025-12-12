import type { Projects } from "./type";

export const dataProjects: Projects = [
  {
    id: 1,
    title: "Personal Web",
    isDone: true,
    priority: "p1",
    dueDate: new Date("2025-10-01"),
  },
  {
    id: 2,
    title: "Contact Management",
    isDone: true,
    priority: "p2",
    dueDate: new Date("2025-11-01"),
  },
  {
    id: 3,
    title: "Task Management",
    isDone: false,
    priority: "p2",
    dueDate: new Date("2025-12-01"),
  },
  {
    id: 4,
    title: "Information API",
    isDone: false,
    priority: "p3",
    dueDate: new Date("2026-01-01"),
  },
  {
    id: 5,
    title: "Simple Ecommerce",
    isDone: false,
    priority: "p4",
    dueDate: new Date("2026-02-01"),
  },
];
