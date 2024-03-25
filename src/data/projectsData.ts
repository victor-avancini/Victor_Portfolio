import { Project } from "../interfaces/projects.interfaces";
import KenzieHub from "../assets/KenzieHub.png";
import Portfólio from "../assets/Portfólio.png";
import BurguerKenzie from "../assets/BurguerKenzie.png";

export const projects: Project[] = [
  {
    id: 1,
    name: "Kenzie Hub",
    description: "Descrição do Projeto 1",
    imageUrl: KenzieHub,
    liveUrl: "https://kenzie-hub-victor-avancini.vercel.app/",
    githubUrl: "link-do-github-aqui",
  },
  {
    id: 2,
    name: "Burguer Kenzie",
    description: "Descrição do Projeto 2",
    imageUrl: BurguerKenzie,
    liveUrl: "https://burguer-kenzie-victor-avancini.vercel.app/",
    githubUrl: "link-do-github-aqui",
  },
  {
    id: 3,
    name: "Portfólio genérico",
    description: "Descrição do Projeto 2",
    imageUrl: Portfólio,
    liveUrl: "https://portfolio-template-victor-avancini.vercel.app/",
    githubUrl: "link-do-github-aqui",
  },
];