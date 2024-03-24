import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage/HomePage"
import { ProjectsPage } from "../pages/ProjectsPage/ProjectsPage"
import { ContactPage } from "../pages/ContactPage/ContactPage"
import { MoreInfo } from "../pages/MoreInfo/MoreInfo"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/more-information" element={<MoreInfo />} />
        </Routes>
    )
}