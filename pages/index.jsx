import React from "react";
import SideMenu from "../components/side-menu";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <SideMenu />;
    </div>
  );
}
