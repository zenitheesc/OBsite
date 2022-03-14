import React from "react";
import styles from "../styles/packages.module.css";

export default function PackageButtons({ time }) {
  return <div className={styles.packageButton}> {time} </div>;
}
