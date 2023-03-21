import capture1 from "../img/projects/Captura1-min.PNG";
import preview1 from "../img/projects/todolist-preview-min.gif";
import capture7 from "../img/projects/Captura7.PNG";

export const projects = [
  {
    id: 1,
    en: {
      name: "To do list",
      description: "To-do list where you can create, search and delete tasks.",
      category: ["Web application", "Course project"],
      status: "Completed",
    },
    es: {
      name: "Lista de tareas",
      description:
        "Lista de tareas donde puedes crear, buscar y eliminar tareas.",
      category: ["Aplicación web", "Proyecto de curso"],
      status: "Completado",
    },
    image: capture1,
    preview: preview1,
    demo: "https://orloxx23.github.io/todolist",
    github: "https://github.com/Orloxx23/todolist",
    tags: ["React"],
  },
  {
    id: 2,
    en: {
      name: "Valorant Stats",
      description: "It allows Valorant users to search for players and view their game history.",
      category: ["Web application", "Personal project"],
      status: "In progress",
    },
    es: {
      name: "Estadísticas de Valorant",
      description: "Permite a los usuarios de Valorant buscar jugadores y ver su historial de juego.",
      category: ["Aplicación web", "Proyecto personal"],
      status: "En desarrollo",
    },
    image: capture7,
    preview: capture7,
    demo: "https://vlrstats.vercel.app",
    github: "https://github.com/Orloxx23/vlrstats",
    tags: ["React"],
  },
];
