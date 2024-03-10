import { Header } from "../../components/Header/Header";
import styles from "./style.module.scss";
import { Footer } from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <>
            <Header />
            <section className={styles.homepage_main}>
                <Link to="/about"><h1>Hi, my name is Victor</h1></Link>
                <h2>I'm a web site developer.</h2>
                <p>I'm a front-end developer and back-end student at <a href="https://kenzie.com.br/" target="_blank">Kenzie Academy Brazil</a></p>
            </section>
            <Footer />
        </>
    )
}