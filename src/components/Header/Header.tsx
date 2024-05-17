import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { HeaderProps } from "../../interfaces/header.interfaces";

export const Header = ({ scrollToSection, aboutRef, projectsRef }: HeaderProps) => {
    return (
        <header>
            <div>
                <Link to="/" className={styles.victor}>
                    <h1>VH</h1>
                </Link>
                <nav>
                    <ul>
                        <li><button onClick={() => scrollToSection(aboutRef)}>About</button></li>
                        <li><button onClick={() => scrollToSection(projectsRef)}>Projects</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}