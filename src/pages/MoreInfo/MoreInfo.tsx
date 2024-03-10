import { Link } from "react-router-dom";
import styles from "./styles.module.scss"

export const MoreInfo = () => {
    return (
        <main>
            <h1>More Information</h1>
            <p>This is a static website built primarily with React.js and Saas and is currently hosted on Vercel.</p>
            <Link to="/" className={styles.btn_back}>Back to homepage</Link>
        </main>
    )
}