import styles from "./Header.module.css";
import Logo from "../allTopics/Flipkart/Navbar/Logo";
import SearchBar from "../allTopics/Flipkart/Navbar/SearchBar";
import Travel from "../allTopics/Flipkart/Navbar/Travel";
import Action from "../allTopics/Flipkart/Navbar/Action";
import ForYou from "../allTopics/Flipkart/Categories/ForYou";
import Beauty from "../allTopics/Flipkart/Categories/Beauty";
import Mobile from "../allTopics/Flipkart/Categories/Mobile";
import Fashion from "../allTopics/Flipkart/Categories/Fashion";
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <div className={styles.container}>
                    <div className={styles.leftSection}>
                        <Logo/>
                        <div className={styles.travel}>
                         <Travel/>
                        </div>
                    </div>
                    {/* <div className = {styles.searchContainer}>
                        <SearchBar/>
                    </div> */}
                    <Action/>

                </div>
                <div className={styles.searchContainer}>
                    <SearchBar />
                </div>
                <div className={styles.forYou}><ForYou /></div>
                <div className={styles.fashion}><Fashion /></div>
                <div className={styles.beauty}><Beauty /></div>
                <div className={styles.mobile}><Mobile /></div>



            </div>

        </header>
    );
};

export default Header;