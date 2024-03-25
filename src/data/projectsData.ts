import { Project } from "../interfaces/projects.interfaces";
import KenzieHub from "../assets/KenzieHub.png";
import Portfólio from "../assets/Portfólio.png";
import BurguerKenzie from "../assets/BurguerKenzie.png";
import OpenMusic from "../assets/Open_Music.png";
import KenzieFlix from "../assets/KenzieFlix.png";
import GenericSite from "../assets/Generic_Site.png";

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
    name: "Open Music",
    description: "Descrição do Projeto",
    imageUrl: OpenMusic,
    liveUrl: "https://open-music-victor-avancini.vercel.app/",
    githubUrl: "link-do-github-aqui",
  },

  {
    id: 4,
    name: "Kenzie Flix",
    description: "Descrição do Projeto",
    imageUrl: KenzieFlix,
    liveUrl: "https://kenzie-flix-victor-avancini.vercel.app/",
    githubUrl: "link-do-github-aqui",
  },

  {
    id: 5,
    name: "Generic Site",
    description: "Descrição do Projeto",
    imageUrl: GenericSite,
    liveUrl: "https://generic-site-victor-avancini.vercel.app/",
    githubUrl: "link-do-github-aqui",
  },
  
  {
    id: 6,
    name: "Generic portfolio",
    description: "Descrição do Projeto 2",
    imageUrl: Portfólio,
    liveUrl: "https://portfolio-template-victor-avancini.vercel.app/",
    githubUrl: "link-do-github-aqui",
  },
];