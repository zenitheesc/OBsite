import React from "react";
import styles from "../styles/Footer.module.css";
import Image from 'next/image'
import obsatLogo from '../public/images/logo-obsat.png'
import zenithLogo from '../public/images/logo-zenith.png'

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.portrait}>
                <div className={styles.image}>
                    <Image src={obsatLogo} alt="Logo OBSAT"></Image>
                </div>
            </div>
            <div className={styles.portrait}>
                <div className={styles.image}>
                    <Image src={zenithLogo} alt="Logo Zenith"></Image>
                </div>

            </div>

        </div>
    );
}