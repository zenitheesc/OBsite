import React from "react";
import styles from "../styles/Footer.module.css";
import Image from 'next/image'
import obsatLogo from '../public/images/logo-obsat.png'
import zenithLogo from '../public/images/logo-zenith.png'

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.portrait}>
                <img
                    src="/images/logo-zenith.png"
                    alt="Zenith logo"
                    className={styles.image}  
                />
            </div>
            <div className={styles.portrait}>
                <img
                    src="/images/logo-obsat.png"
                    alt="OBSAT logo"
                    className={styles.image}  
                />
            </div>
        </div>
    );
}