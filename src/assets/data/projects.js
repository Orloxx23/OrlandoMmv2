import capture1 from "../img/projects/Captura1-min.PNG";
import preview1 from "../img/projects/todolist-preview-min.gif";
import capture2 from "../img/projects/Captura2-min.PNG";
import preview2 from "../img/projects/valorantfa-preview-min.gif";
import capture3 from "../img/projects/Captura3-min.PNG";
import preview3 from "../img/projects/web3-preview-min.gif";
import capture4 from "../img/projects/Captura4-min.PNG";
import preview4 from "../img/projects/colombia-preview.gif";
import capture5 from "../img/projects/Captura5.PNG";
import preview5 from "../img/projects/get-pokedex-preview.gif";
import capture6 from "../img/projects/Captura6.PNG";
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
      name: "Valorant for all",
      description: "Compilation of videos to improve in valorant.",
      category: ["Web page", "Personal project"],
      status: "Completed",
    },
    es: {
      name: "Valorant para todos",
      description: "Recopilación de videos para mejorar en valorant.",
      category: ["Página web", "Proyecto personal"],
      status: "Completado",
    },
    image: capture2,
    preview: preview2,
    demo: "https://valorantfa-client.vercel.app/",
    github: "https://github.com/Orloxx23/valorantfa-client",
    tags: ["React", "Youtube API"],
  },
  {
    id: 3,
    en: {
      name: "Web3 voting system with CELO",
      description: "Simple Web3 voting system.",
      category: ["Web application", "Course project"],
      status: "Completed",
    },
    es: {
      name: "Sistema de votación web3 con CELO",
      description: "Sencillo sistema de votación Web3.",
      category: ["Aplicación web", "Proyecto de curso"],
      status: "Completado",
    },
    image: capture3,
    preview: preview3,
    demo: "http://votacion-celo.vercel.app/",
    github: "https://github.com/Orloxx23/Votacion-Celo",
    tags: ["React", "Solidity", "CELO"],
  },
  {
    id: 4,
    en: {
      name: "Armed conflict in Colombia",
      description: "History of the armed conflict in Colombia.",
      category: ["Web page", "Personal project"],
      status: "Completed",
    },
    es: {
      name: "Conflicto armado en colombia",
      description: "Historia del conflicto armado en colombia.",
      category: ["Página web", "Proyecto personal"],
      status: "Completado",
    },
    image: capture4,
    preview: preview4,
    demo: "https://orloxx23.github.io/Conflicto-Colombia/",
    github: "https://github.com/Orloxx23/Conflicto-Colombia",
    tags: ["React"],
  },
  {
    id: 5,
    en: {
      name: "Get pokedex",
      description: "Presentation page for my pokedex application.",
      category: ["Web page", "Personal project"],
      status: "Completed",
    },
    es: {
      name: "Obtener pokedex",
      description: "Pagina de presentacion para mi aplicación de pokedex.",
      category: ["Página web", "Proyecto personal"],
      status: "Completado",
    },
    image: capture5,
    preview: preview5,
    demo: "https://orloxx23.github.io/get-pokedex",
    github: "https://github.com/Orloxx23/get-pokedex",
    tags: ["React", "Spline", "Bootstrap Studio"],
  },
  {
    id: 6,
    en: {
      name: "Platzi Travel",
      description: "The website that will show you information about lodgings around the world.",
      category: ["Web page", "Course project"],
      status: "Completed",
    },
    es: {
      name: "Platzi Travel",
      description: "El sitio web que te mostrará información sobre hospedajes en todo el mundo.",
      category: ["Página web", "Proyecto de curso"],
      status: "Completado",
    },
    image: capture6,
    preview: capture6,
    demo: "https://orloxx23.github.io/PlatziTravel/",
    github: "https://github.com/Orloxx23/PlatziTravel",
    tags: ["Tailwind CSS"],
  },
  {
    id: 7,
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
