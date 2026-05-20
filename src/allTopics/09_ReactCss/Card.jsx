import style from "./Card.module.css";
import { FaUser } from "react-icons/fa";
const Card = () => {
    return (
        <section id={style.cardContainer}>
            <div className={style.userImage}>   <FaUser />   </div>
        <h1 className={style.userNmae}> Renu Kumari</h1>
        <p className= {style.design}>Frontend Developer</p>
        <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, repudiandae!</p>
        <button className={style.btn}>Hire me</button>
            
        </section>
    );
};

export default Card;