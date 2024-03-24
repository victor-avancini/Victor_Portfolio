import { Header } from "../../components/Header/Header";
import styles from "./style.module.scss";
import { Footer } from "../../components/Footer/Footer";
import { AboutSection } from "../../Sections/AboutSection/AboutSection";
import { SkillsSection } from "../../Sections/SkillsSection/SkillsSection";
import { useRef } from "react";

export const HomePage = () => {
    const aboutSectionRef = useRef(null);

    const scrollToSection = (sectionRef: any) => {
        window.scrollTo({
            top: sectionRef.current.offsetTop,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <Header scrollToSection={scrollToSection} aboutRef={aboutSectionRef}/>
            <section className={styles.homepage_main}>
                <h1>Hi, my name is Victor</h1>
                <h2>I'm a web site developer.</h2>
                <p>I'm a front-end developer and back-end student at <a href="https://kenzie.com.br/" target="_blank">Kenzie Academy Brazil</a></p>
            </section>
            <div ref={aboutSectionRef}><AboutSection /></div>
            <SkillsSection />
            <Footer />
        </>
    )
}