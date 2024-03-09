import { Header } from "../../components/Header/Header";
import homeImage from "../../assets/home_image.png";
import styles from "./style.module.scss"
import { Footer } from "../../components/Footer/Footer";

export const HomePage = () => {
    return (
        <>
            <Header />
            <img src={homeImage} alt="Programmer" className={styles.home_image} />
            <Footer />
        </>
    )
}