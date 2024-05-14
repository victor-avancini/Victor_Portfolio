import React from "react";
import { ProjectCardProps, Technology } from "../../interfaces/projects.interfaces";
import styles from "./style.module.scss";


export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className={styles.project_card}>
            <a href={project.liveUrl} target="_blank"><img src={project.imageUrl} alt={project.name} /></a>
            <div className={styles.liveUrl}>
                <a href={project.liveUrl} target="_blank">{project.name}</a>
                <div className={styles.technologies}>
                    {project.technologies.map((tech: Technology) => (
                        <i className={tech.link}></i>
                    ))}
                </div>
                <div className={styles.githubUrl}>
                    <a href={project.githubUrl} target="_blank">
                        <i className="devicon-github-original"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}