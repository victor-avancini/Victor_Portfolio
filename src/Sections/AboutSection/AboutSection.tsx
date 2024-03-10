import Victor from "../../assets/victorhugo.png";
import styles from "./style.module.scss";

export const AboutSection = () => {
    return (
        <section className={styles.about_section}>
            <img src={Victor} alt="Victor" className={styles.victor_photo} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nostrum amet dicta quae exercitationem ullam quia itaque, ipsa iste eius accusantium accusamus temporibus atque soluta quis libero magni repellat deserunt.</p>
        </section>
    )
}