import { MdOutlineMailOutline } from "react-icons/md";
import Victor from "../../assets/victorhugo.png";
import styles from "./style.module.scss";
import { Slide } from "react-awesome-reveal";

export const AboutSection = () => {
    return (
        <section className={styles.about_section}>
            <Slide triggerOnce>
                <div className={styles.victor}>
                    <img src={Victor} alt="Victor" className={styles.victor_photo} />
                    <div className={styles.divisor}></div>
                    <small><a href="mailto:victor.avancini@hotmail.com">Send me a note <MdOutlineMailOutline /></a></small>
                </div>
            </Slide>
            <Slide triggerOnce direction="up">
                <div className={styles.victor_description}>
                    <h1>Full-Stack Developer</h1>
                    <p>As a Full-Stack Developer in training at <a href="https://kenzie.com.br/" target="_blank">Kenzie Academy Brazil</a>, I'm passionate about simplifying and enriching user experiences through beautiful designs. With a background in <strong>Civil Engineering</strong> from <a href="https://portal.fei.edu.br/">Centro Universitário FEI</a> in Brazil, and a <strong>Master's in Structural Engineering</strong> from the <a href="https://www5.usp.br/">University of São Paulo</a>, my journey has taken me from the precision of engineering to the creativity of coding, including a formative exchange at the <a href="https://ipv.pt/">Politécnico de Viseu in Portugal</a>.</p>
                    <p>Traveling the world has opened my eyes to diverse perspectives, which I bring to my personal projects. Currently not tied to any company, I'm free to explore innovative solutions and freelance opportunities that challenge and expand my skill set.</p>
                    <p>Feel free to reach out via email or social media for collaborations or freelance inquiries. I'm excited to bring simplicity, functionality, and beauty to your digital experiences.</p>
                    <div className={styles.profile_buttons}>
                        <a href="https://github.com/victor-avancini" target="_blank">View GitHub profile</a>
                        <a href="https://www.linkedin.com/in/victor-avancini/" target="_blank">View LinkedIn Profile</a>
                    </div>
                </div>
            </Slide>
        </section >
    )
}