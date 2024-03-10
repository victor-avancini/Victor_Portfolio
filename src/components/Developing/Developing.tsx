import { Link } from "react-router-dom";
import styles from "./style.module.scss"

export const Developing = () => {
    return (
        <main className={styles.developing}>
            <h1>Something New Is Coming!</h1>
            <p>This section of our application is currently under construction. We will have news soon!</p>
            <Link to="/" className={styles.btn_back}>Back to homepage</Link>
        </main>
    )
}