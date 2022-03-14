import React from "react";
import Image from "next/image";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <Image
        src="/images/logo-zenith.png"
        alt="Zenith logo"
        height={95}
        width={177}
      />
      <Image
        src="/images/logo-obsat.png"
        alt="OBSAT logo"
        height={90}
        width={70}
      />
    </div>
  );
}
