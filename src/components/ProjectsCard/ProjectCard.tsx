import React from "react";
import { ProjectCardProps } from "../../interfaces/projects.interfaces";
import styles from "./style.module.scss";

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className={styles.project_card}>
            <a href={project.liveUrl} target="_blank"><img src={project.imageUrl} alt={project.name} /></a>
            <div className={styles.links}>
                <small>
                    <a href={project.liveUrl} target="_blank">{project.name}</a>
                </small>
            </div>
        </div>

    )
}