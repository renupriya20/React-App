import styles from "./Categories.module.css";
import { IoHome } from "react-icons/io5";

const ForYou = ({ isActive, onClick }) => {
    return (
        <button
            className={`${styles.catItem} ${isActive ? styles.active : ""}`}
            onClick={() => onClick("foryou")}
        >
            <span className={styles.catIcon}><IoHome /></span>
            <span className={styles.catLabel}>For You</span>
        </button>
    );
}

export default ForYou;