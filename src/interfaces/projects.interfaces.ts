export interface Technology {
  id: number;
  name: string;
  link: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  technologies: Technology[];
}

export interface ProjectCardProps {
  project: Project;
}