import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage/HomePage"
import { MoreInfo } from "../pages/MoreInfo/MoreInfo"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/more-information" element={<MoreInfo />} />
        </Routes>
    )
}