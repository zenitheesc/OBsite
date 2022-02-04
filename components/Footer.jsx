import React from "react";
import styles from "../styles/Footer.module.css";
import Image from 'next/image'
import obsatLogo from '../public/images/logo-obsat.png'
import zenithLogo from '../public/images/logo-zenith.png'

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.portrait}>
                <Image
                    src={zenithLogo}
                    alt="Picture of the author"  
                    layout="fill"
               />
            </div>
            <div className={styles.portrait}>
                <Image
                    src={obsatLogo}
                    alt="Picture of the author"  
                    layout="fill"
                />
            </div>

        </div>
    );
}