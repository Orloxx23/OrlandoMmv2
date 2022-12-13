import capture1 from "../img/projects/Captura1.PNG";
import capture2 from "../img/projects/Captura2.PNG";
import capture3 from "../img/projects/Captura3.PNG";
import capture4 from "../img/projects/Captura4.PNG";

export const projects = [
  {
    id: 1,
    en: {
      name: "To do list",
      description: "To-do list where you can create, search and delete tasks.",
    },
    es: {
      name: "Lista de tareas",
      description:
        "Lista de tareas donde puedes crear, buscar y eliminar tareas.",
    },
    image: capture1,
    demo: "https://orloxx23.github.io/todolist",
    github: "https://github.com/Orloxx23/todolist",
    status: "Completed",
    tags: ["React"],
  },
  {
    id: 2,
    en: {
      name: "Valorant for all",
      description: "Compilation of videos to improve in valorant.",
    },
    es: {
      name: "Valorant para todos",
      description: "Recopilación de videos para mejorar en valorant.",
    },
    image: capture2,
    demo: "https://valorantfa-client.vercel.app/",
    github: "https://github.com/Orloxx23/valorantfa-client",
    status: "Completed",
    tags: ["React", "Youtube API"],
  },
  {
    id: 3,
    en: {
      name: "Web3 voting system with CELO",
      description: "Simple Web3 voting system.",
    },
    es: {
      name: "Sistema de votación web3 con CELO",
      description: "Sencillo sistema de votación Web3.",
    },
    image: capture3,
    demo: "http://votacion-celo.vercel.app/",
    github: "https://github.com/Orloxx23/Votacion-Celo",
    status: "Completed",
    tags: ["React", "Solidity", "CELO"],
  },
  {
    id: 4,
    en: {
      name: "Armed conflict in Colombia",
      description: "History of the armed conflict in Colombia.",
    },
    es: {
      name: "Conflicto armado en colombia",
      description: "Historia del conflicto armado en colombia.",
    },
    image: capture4,
    demo: "https://orloxx23.github.io/Conflicto-Colombia/",
    github: "https://github.com/Orloxx23/Conflicto-Colombia",
    status: "Completed",
    tags: ["React"],
  },
];
