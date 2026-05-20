import styles from "./Logo.module.css";
import { FaFacebookF } from "react-icons/fa";

const Logo = () => {
    return (
        <div className={styles.logo}>  
            <span className={styles.fIcon}><FaFacebookF /></span> 
            <span className={styles.logoText}>Flipkart</span> 
          </div>
    );
};

export default Logo;