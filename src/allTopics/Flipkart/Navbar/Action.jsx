
import React from 'react';
import { BsCart3 } from "react-icons/bs";
import { PiUserCircle } from "react-icons/pi";
import { TiLocation } from "react-icons/ti";
import { RiArrowDropDownLine } from "react-icons/ri";
import styles from './Action.module.css';

const Action = () => {
    return (
        <div className={styles.actions}>
           
            <div className={styles.location}>
                <span className={styles.pin}><TiLocation /></span>
                <div>
                    <div className={styles.locationText}>Location not set</div>
                    <div className={styles.selectLocation}>Select delivery location</div>
                </div>
            </div>

           
            <div className={styles.actionItem}>
                <PiUserCircle />Login
                <span className={styles.dowmArrow}><RiArrowDropDownLine /></span>
            </div>

           
            <div className={styles.actionItem}>
                More
                <span className={styles.dropdownArrow}><RiArrowDropDownLine /></span>
            </div>

           
            <div className={styles.cart}>
                <BsCart3 />
                <span className={styles.cartText}>Cart</span>
                
            </div>
        </div>
    );
};

export default Action;