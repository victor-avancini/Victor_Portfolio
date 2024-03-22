import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer >
            <div className={styles.footer_victor}>
                <h1>Victor Hugo</h1>
                <p>An front-end developer from Brazil.</p>
            </div>
            <div className={styles.footer_more}>
                <div className={styles.social_media}>
                    <a href="https://www.linkedin.com/in/victor-avancini/" target="_blank"><FaLinkedin className={styles.icons}/></a>
                    <a href="https://github.com/victor-avancini" target="_blank"><FaGithub className={styles.icons}/></a>
                    <a href="https://www.instagram.com/victor.avancini/" target="_blank"><FaInstagram className={styles.icons}/></a>
                </div>
                <Link to="/more-information" className={styles.more_info}>More Info</Link>
            </div>
        </footer>
    )
}