import React from "react";
import styles from "../styles/SideMenu.module.css";
import TeamButton from "./EquipeSideMenuButton";
import UploadButton from "./UploadSideMenuButton";

export default function SideMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.headerBox}>
        <TeamButton></TeamButton>
        <UploadButton></UploadButton>
      </div>
    </div>
  );
}
