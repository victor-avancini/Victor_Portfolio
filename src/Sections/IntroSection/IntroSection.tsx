import { TypeAnimation } from "react-type-animation";
import styles from "./style.module.scss";

export const IntroSection = () => {
    return (
        <section className={styles.homepage_main}>
            <h1>Hi, my name is Victor</h1>
            <TypeAnimation
                sequence={[`I'm frontend developer.`, 1000, `I'm backend developer.`, 1000, `I'm software engineer.`, 1000]}
                wrapper="h2" speed={50} repeat={0}
            />
            <p>I'm a front-end developer and back-end student at <a href="https://kenzie.com.br/" target="_blank">Kenzie Academy Brazil</a></p>
        </section>
    )
}