import { Link } from "react-router-dom";
import Victor from "../../assets/Victor.png";
import verified from "../../assets/verified.png";
import styles from "./style.module.scss";
import { MdDarkMode } from "react-icons/md";

export const Header = ({ scrollToSection, aboutRef }: any ) => {
    return (
        <header>
            <div>
                <Link to="/" className={styles.victor}>
                    <img src={Victor} alt="Victor" className={styles.victor_photo} />
                    <h1>Victor</h1>
                    <img src={verified} alt="Verified-icon" className={styles.verified_icon} />
                </Link>
                <nav>
                    <ul>
                        <li><button onClick={() => scrollToSection(aboutRef)}>About</button></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <MdDarkMode className={styles.darkmode_btn} />
        </header>
    )
}