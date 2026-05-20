import styles from "./Categories.module.css";
import { LiaTshirtSolid } from "react-icons/lia";
 const Fashion = ({ isActive, onClick }) => {
    return (
        <button
            className={`${styles.catItem} ${isActive ? styles.active : ""}`}
            onClick={() => onClick("fashion")}
        >
            <span className={styles.catIcon}><LiaTshirtSolid /></span>
            <span className={styles.catLabel}>Fashion</span>
        </button>
    );
};

export default Fashion;