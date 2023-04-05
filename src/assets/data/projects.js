import capture1 from "../img/projects/Captura1-min.PNG";
import capture7 from "../img/projects/Captura7.PNG";
import capture2 from "../img/projects/Captura2.PNG";

export const projects = [
  {
    id: 1,
    en: {
      name: "To do list",
      description:
        "Todo list where you can create, search and delete tasks. You also receive advice to improve your productivity with the help of artificial intelligence (GPT3).",
      category: ["Web application", "Course project"],
      status: "Completed",
    },
    es: {
      name: "Lista de tareas",
      description:
        "Lista de tareas donde puedes crear, buscar y eliminar tareas. Tambien recibes concejos para mejorar tu productividad con ayuda de inteligencia artificial (GPT3).",
      category: ["Aplicación web", "Proyecto de curso"],
      status: "Completado",
    },
    image: capture1,
    preview: capture1,
    demo: "https://orloxx23.github.io/todolist",
    github: "https://github.com/Orloxx23/todolist",
    tags: ["React", "OpenAI", "GPT3"],
  },
  {
    id: 2,
    en: {
      name: "Valorant Stats",
      description:
        "It allows Valorant users to search for players and view their game history.",
      category: ["Web application", "Personal project"],
      status: "In progress",
    },
    es: {
      name: "Estadísticas de Valorant",
      description:
        "Permite a los usuarios de Valorant buscar jugadores y ver su historial de juego.",
      category: ["Aplicación web", "Proyecto personal"],
      status: "En desarrollo",
    },
    image: capture7,
    preview: capture7,
    demo: "https://vlrstats.vercel.app",
    github: "https://github.com/Orloxx23/vlrstats",
    tags: ["React"],
  },
  {
    id: 3,
    en: {
      name: "Taply",
      description:
        "Is a remote control for Valorant. Select the game mode, modify the room and choose your favorite agent from your mobile device.",
      category: ["Web page", "Personal project"],
      status: "In progress",
    },
    es: {
      name: "Taply",
      description:
        "Es un control remoto para Valorant. Selecciona el modo de juego, modifica la sala y elige a tu agente favorito desde tu dispositivo móvil.",
      category: ["Pagina web", "Proyecto personal"],
      status: "En desarrollo",
    },
    image: capture2,
    preview: capture2,
    demo: "https://orloxx23.github.io/Taply-page/",
    github: "",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];
