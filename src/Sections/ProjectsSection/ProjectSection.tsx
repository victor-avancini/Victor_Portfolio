import { ProjectCard } from "../../components/ProjectsCard/ProjectCard";
import { projects } from "../../data/projectsData";
import styles from "./style.module.scss";

export const ProjectSection = () => {
    return (
        <section className={styles.project_section}>
            <h1>Some of the projects I've developed so far...</h1>
            <div className={styles.projects}>
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}