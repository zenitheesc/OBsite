import React from "react";
import styles from "../styles/SideMenu.module.css";
import DataTeam from "./DataTeam";
import HorizontalLine from "./HorizontalLine";
import Footer from "./Footer";

export default function SideMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.headerBox}>
        <DataTeam></DataTeam>
      </div>

      <HorizontalLine></HorizontalLine>

      <Footer></Footer>
    </div>

  );
}
