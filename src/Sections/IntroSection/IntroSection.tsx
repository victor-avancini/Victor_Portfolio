import styles from "./style.module.scss";

export const IntroSection = () => {
    return (
        <section className={styles.homepage_main}>
            <h1>Hi, my name is Victor</h1>
            <h2>I'm a web site developer.</h2>
            <p>I'm a front-end developer and back-end student at <a href="https://kenzie.com.br/" target="_blank">Kenzie Academy Brazil</a></p>
        </section>
    )
}