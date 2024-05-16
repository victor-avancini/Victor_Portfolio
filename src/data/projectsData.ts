import { Project } from "../interfaces/projects.interfaces";
import KenzieHub from "../assets/KenzieHub.png";
import Portfólio from "../assets/Portfólio.png";
import BurguerKenzie from "../assets/BurguerKenzie.png";
import OpenMusic from "../assets/Open_Music.png";
import KenzieFlix from "../assets/KenzieFlix.png";
import GenericSite from "../assets/Generic_Site.png";
import Bandeiras from "../assets/bandeiras.png";

export const projects: Project[] = [
  {
    id: 1,
    name: "Bandeiras Brasil (Developing)",
    description: "Descrição do Projeto 1",
    imageUrl: Bandeiras,
    liveUrl: "https://bandeiras-brasil.vercel.app/",
    githubUrl: "https://github.com/victor-avancini/bandeiras_brasil",
    technologies: [
      {
        id: 1,
        name: "React",
        link: "devicon-react-original colored"
      },
      {
        id: 2,
        name: "HTML5",
        link: "devicon-html5-plain colored"
      },
      {
        id: 3,
        name: "Sass",
        link: "devicon-sass-original colored"
      },
      {
        id: 4,
        name: "TypeScript",
        link: "devicon-javascript-plain colored"
      },
    ]
  },
  {
    id: 2,
    name: "Kenzie Hub",
    description: "Descrição do Projeto 1",
    imageUrl: KenzieHub,
    liveUrl: "https://kenzie-hub-victor-avancini.vercel.app/",
    githubUrl: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-victor-avancini",
    technologies: [
      {
        id: 1,
        name: "React",
        link: "devicon-react-original colored"
      },
      {
        id: 2,
        name: "HTML5",
        link: "devicon-html5-plain colored"
      },
      {
        id: 3,
        name: "Sass",
        link: "devicon-sass-original colored"
      },
      {
        id: 4,
        name: "JavaScrip",
        link: "devicon-javascript-plain colored"
      },
    ]
  },
  {
    id: 3,
    name: "Burguer Kenzie",
    description: "Descrição do Projeto 2",
    imageUrl: BurguerKenzie,
    liveUrl: "https://burguer-kenzie-victor-avancini.vercel.app/",
    githubUrl: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-template-hamburgueria-victor-avancini",
    technologies: [
      {
        id: 1,
        name: "React",
        link: "devicon-react-original colored"
      },
      {
        id: 2,
        name: "HTML5",
        link: "devicon-html5-plain colored"
      },
      {
        id: 3,
        name: "Sass",
        link: "devicon-sass-original colored"
      },
      {
        id: 4,
        name: "JavaScrip",
        link: "devicon-javascript-plain colored"
      },
    ]
  },

  {
    id: 4,
    name: "Open Music",
    description: "Descrição do Projeto",
    imageUrl: OpenMusic,
    liveUrl: "https://open-music-victor-avancini.vercel.app/",
    githubUrl: "https://github.com/Kenzie-Academy-Brasil-Developers/m2-open-music-template-victor-avancini",
    technologies: [
      {
        id: 1,
        name: "HTML5",
        link: "devicon-html5-plain colored"
      },
      {
        id: 2,
        name: "CSS3",
        link: "devicon-css3-plain colored"
      },
      {
        id: 3,
        name: "JavaScrip",
        link: "devicon-javascript-plain colored"
      },
    ]
  },

  {
    id: 5,
    name: "Kenzie Flix",
    description: "Descrição do Projeto",
    imageUrl: KenzieFlix,
    liveUrl: "https://kenzie-flix-victor-avancini.vercel.app/",
    githubUrl: "https://github.com/Kenzie-Academy-Brasil-Developers/m1-kenzie-flix-victor-avancini",
    technologies: [
      {
        id: 1,
        name: "HTML5",
        link: "devicon-html5-plain colored"
      },
      {
        id: 2,
        name: "CSS3",
        link: "devicon-css3-plain colored"
      },
    ]
  },

  {
    id: 6,
    name: "Generic Site",
    description: "Descrição do Projeto",
    imageUrl: GenericSite,
    liveUrl: "https://generic-site-victor-avancini.vercel.app/",
    githubUrl: "https://github.com/Kenzie-Academy-Brasil-Developers/m2-site-instituciona-generico-victor-avancini",
    technologies: [
      {
        id: 1,
        name: "HTML5",
        link: "devicon-html5-plain colored"
      },
      {
        id: 2,
        name: "CSS3",
        link: "devicon-css3-plain colored"
      },
      {
        id: 3,
        name: "JavaScrip",
        link: "devicon-javascript-plain colored"
      },
    ]
  },

  {
    id: 7,
    name: "Generic portfolio",
    description: "Descrição do Projeto 2",
    imageUrl: Portfólio,
    liveUrl: "https://portfolio-template-victor-avancini.vercel.app/",
    githubUrl: "https://github.com/Kenzie-Academy-Brasil-Developers/m3-s1-entrega-portfolio-template-victor-avancini",
    technologies: [
      {
        id: 1,
        name: "React",
        link: "devicon-react-original colored"
      },
      {
        id: 2,
        name: "HTML5",
        link: "devicon-html5-plain colored"
      },
      {
        id: 3,
        name: "CSS3",
        link: "devicon-css3-plain colored"
      },
      {
        id: 4,
        name: "JavaScrip",
        link: "devicon-javascript-plain colored"
      },
    ]
  },

];