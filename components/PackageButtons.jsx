import React from "react";
import styles from "../styles/Packages.module.css";

export default function PackageButtons({ time }) {
  return <div className={styles.PackageButton}> {time} </div>;
}
