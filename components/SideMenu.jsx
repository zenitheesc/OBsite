import React from "react";
import styles from "../styles/SideMenu.module.css";
import PackageGrid from "./PackageGrid";
import PackageButtons from "./PackageButtons";

export default function SideMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.headerBox}> Cabeçalho </div>
      <PackageGrid>
        <PackageButtons time="15:32:51" />
        <PackageButtons time="15:32:51" />
        <PackageButtons time="15:32:51" />
        <PackageButtons time="15:32:51" />
        <PackageButtons time="15:32:51" />
        <PackageButtons time="15:32:51" />
        <PackageButtons time="15:32:51" />
        <PackageButtons time="15:32:51" />
      </PackageGrid>
    </div>
  );
}
