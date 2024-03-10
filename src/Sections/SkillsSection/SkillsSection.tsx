import 'devicon/devicon.min.css';
import styles from "./style.module.scss"

export const SkillsSection = () => {
    return (
        <section className={styles.skills_section}>
            <h1>The skills, tools and technologies I use</h1>
            <div className={styles.icons}>
                <i className="devicon-html5-plain"><p>HTML5</p></i>
                <i className="devicon-css3-plain"><p>CSS3</p></i>
                <i className="devicon-typescript-plain"><p>TypeScript</p></i>
                <i className="devicon-javascript-plain"><p>JavaScript</p></i>
                <i className="devicon-react-original"><p>React</p></i>          
                <i className="devicon-redux-original"><p>Redux</p></i>
                <i className="devicon-figma-plain"><p>Figma</p></i>
                <i className="devicon-sass-original"><p>Sass</p></i>
                <i className="devicon-tailwindcss-original"><p>Tailwindcss</p></i>
                <i className="devicon-git-plain"><p>Git</p></i>
                <i className="devicon-github-original"><p>GitHub</p></i>
                <i className="devicon-insomnia-plain"><p>Insomnia</p></i>
                <i className="devicon-nodejs-plain"><p>Nodejs</p></i>
                <i className="devicon-express-original"><p>Express</p></i>
            </div>
        </section>
    )
}