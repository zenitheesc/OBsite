import React from "react";
import styles from "../styles/packages.module.css";

export default function PackageGrid({ children }) {
  return (
    <div className={styles.wrapperGrid}>
      <div className={styles.title}> Pacotes recebidos</div>
      <div className={styles.contentGrid}> {children} </div>
    </div>
  );
}
