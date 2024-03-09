import { Link } from "react-router-dom";

export const MoreInfo = () => {
    return (
        <main>
            <h1>More Information</h1>
            <p>This is a static website built primarily with React.js & Saas and is currently hosted on Vercel.</p>
            <Link to="/" className="btn-back">Back to homepage</Link>
        </main>
    )
}