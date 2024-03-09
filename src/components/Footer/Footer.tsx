import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import instagramIcon from "../../assets/instagram.svg";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer >
            <div className={styles.footer_victor}>
                <h1>Victor Hugo</h1>
                <p>An independent fron-end developer from Brazil.</p>
            </div>
            <div className={styles.footer_more}>
                <div className={styles.social_media}>
                    <a href="https://www.linkedin.com/in/victor-avancini/" target="_blank"><img src={linkedinIcon} alt="Linkedin" /></a>
                    <a href="https://github.com/victor-avancini" target="_blank"><img src={githubIcon} alt="GitHub" /></a>
                    <a href="https://www.instagram.com/victor.avancini/" target="_blank"><img src={instagramIcon} alt="Instagram" /></a>
                </div>
                <Link to="/more-information" className={styles.more_info}>More Info</Link>
            </div>
        </footer>
    )
}