import React from "react";
import styles from "../styles/SideMenu.module.css";
import DataTeam from "./DataTeam";
import HorizontalLine from "./HorizontalLine";
import Footer from "./Footer";
import PackageGrid from "./PackageGrid";
import PackageButtons from "./PackageButtons";

export default function SideMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.headerBox}>
        <DataTeam></DataTeam>
      </div>

      <HorizontalLine></HorizontalLine>

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

      <Footer></Footer>

    </div>
  );
}
