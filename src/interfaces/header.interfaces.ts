import { RefObject } from "react";

export interface HeaderProps {
    scrollToSection: (sectionRef: RefObject<HTMLElement>) => void;
    aboutRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
}