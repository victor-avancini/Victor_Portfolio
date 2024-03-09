import { Link } from "react-router-dom";

export const Developing = () => {
    return (
        <main>
            <h1>Something New Is Coming!</h1>
            <p>This section of our application is currently under construction. We will have news soon!</p>
            <Link to="/" className="btn-back">Back to homepage</Link>
        </main>
    )
}