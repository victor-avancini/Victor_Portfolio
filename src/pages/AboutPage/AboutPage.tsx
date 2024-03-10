import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { AboutSection } from "../../Sections/AboutSection/AboutSection";
import { SkillsSection } from "../../Sections/SkillsSection/SkillsSection";

export const AboutPage = () => {
    return (
        <>
            <Header />
            <AboutSection />
            <SkillsSection />
            <Footer />
        </>
    )
}