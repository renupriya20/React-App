import { BsAirplaneEnginesFill } from "react-icons/bs";;
import styles from "./Travel.module.css";

const Travel = () => {
    return (
        <button className={styles.travelBtn}>
            <span className={styles.tIcon}><BsAirplaneEnginesFill  /></span>
            
            <span className={styles.tText}>Travel</span>
        </button>
    );
};

export default Travel;