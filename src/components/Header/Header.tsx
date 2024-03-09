import { Link } from "react-router-dom";
import Victor from "../../assets/Victor.png";
import verified from "../../assets/verified.png";
import styles from "./style.module.scss"

export const Header = () => {
    return (
        <header>
            <Link to="/" className={styles.victor}>
                <img src={Victor} alt="Victor" className={styles.victor_photo} />
                <h1>Victor</h1>
                <img src={verified} alt="Verified-icon" className={styles.verified_icon} />
            </Link>
            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}