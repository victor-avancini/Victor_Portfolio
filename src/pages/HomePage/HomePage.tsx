import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { AboutSection } from "../../Sections/AboutSection/AboutSection";
import { SkillsSection } from "../../Sections/SkillsSection/SkillsSection";
import { RefObject, useRef } from "react";
import { IntroSection } from "../../Sections/IntroSection/IntroSection";
import { ProjectSection } from "../../Sections/ProjectsSection/ProjectSection";
import { ContactSection } from "../../Sections/ContactSection/ContactSection";

export const HomePage = () => {
    const aboutSectionRef = useRef(null);
    const projectSectionRef = useRef(null);
    const contactSectionRef = useRef(null);

    const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
        window.scrollTo({
            top: sectionRef.current?.offsetTop,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <Header scrollToSection={scrollToSection} aboutRef={aboutSectionRef} projectsRef={projectSectionRef} contactRef={contactSectionRef} />
            <IntroSection />
            <div ref={aboutSectionRef}><AboutSection /></div>
            <SkillsSection />
            <div ref={projectSectionRef}><ProjectSection /></div>
            <div ref={contactSectionRef}><ContactSection /></div>
            <Footer />
        </>
    )
}