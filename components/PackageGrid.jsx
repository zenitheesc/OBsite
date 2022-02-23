import React from "react";
import styles from "../styles/Packages.module.css";

export default function PackageGrid({ children }) {
  return (
    <div className={styles.WrapperGrid}>
      <div className={styles.title}>Dados Recebidos</div>
      <div className={styles.ContentGrid}> {children} </div>
    </div>
  );
}
