import React from "react";
import styles from "../styles/SideMenu.module.css";
<<<<<<< HEAD
import DataTeam from "./DataTeam";
import HorizontalLine from "./HorizontalLine";
import Footer from "./Footer";
=======
import PackageGrid from "./PackageGrid";
import PackageButtons from "./PackageButtons";
>>>>>>> origin/package-buttons

export default function SideMenu() {
  return (
    <div className={styles.container}>
<<<<<<< HEAD
      <div className={styles.headerBox}>
        <DataTeam></DataTeam>
      </div>

      <HorizontalLine></HorizontalLine>

      <Footer></Footer>
=======
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
>>>>>>> origin/package-buttons
    </div>

  );
}
