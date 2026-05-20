import styles from "./Categories.module.css";
import { GiLipstick } from "react-icons/gi";

const Beauty= ({ isActive, onClick }) => {
    return (
        <button
            className={`${styles.catItem} ${isActive ? styles.active : ""}`}
            onClick={() => onClick("beauty")}
        >
            <span className={styles.catIcon}><GiLipstick /></span>
            <span className={styles.catLabel}>Beauty</span>
        </button>
    );
}

export default Beauty;