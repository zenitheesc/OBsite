import React from "react";
import styles from "../styles/Packages.module.css";

export default function PackageGrid({ children }) {
  return (
    <div className={styles.WrapperGrid}>
      <h1>Dados Recebidos</h1>
      <div className={styles.ContentGrid}> {children} </div>
    </div>
  );
}
