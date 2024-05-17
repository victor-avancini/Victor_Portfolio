import { RefObject, useRef } from "react";
import { AboutSection, IntroSection, ProjectSection, SkillsSection } from "../../Sections";
import { Footer, Header } from "../../components";

export const HomePage = () => {
    const aboutSectionRef = useRef(null);
    const projectSectionRef = useRef(null);
    const skillsSectionRef = useRef(null);

    const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
        window.scrollTo({
            top: sectionRef.current?.offsetTop,
            behavior: 'smooth',
        })
    }

    return (
        <>
            <Header scrollToSection={scrollToSection} aboutRef={aboutSectionRef} projectsRef={projectSectionRef} skillsRef={skillsSectionRef} />
            <IntroSection />
            <div ref={aboutSectionRef}><AboutSection /></div>
            <div ref={skillsSectionRef}><SkillsSection /></div>
            <div ref={projectSectionRef}><ProjectSection /></div>
            <Footer />
        </>
    )
}