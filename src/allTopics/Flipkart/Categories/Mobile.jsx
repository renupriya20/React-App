import styles from "./Categories.module.css";
import { CiMobile3 } from "react-icons/ci";

const  Mobile = ({ isActive, onClick }) => {
    return (
        <button
            className={`${styles.catItem} ${isActive ? styles.active : ""}`}
            onClick={() => onClick("mobiles")}
        >
            <span className={styles.catIcon}><CiMobile3 /></span>
            <span className={styles.catLabel}>Mobiles</span>
        </button>
    );
};

export default Mobile;