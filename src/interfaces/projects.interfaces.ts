export interface Project {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  liveUrl: string; // Link do Vercel
  githubUrl: string;
}

export interface ProjectCardProps {
  project: Project;
}