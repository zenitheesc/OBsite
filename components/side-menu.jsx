import React from "react";
import styles from "../styles/side-menu.module.css";
import DataTeam from "./data-team";
import HorizontalLine from "./horizontal-line";
import Footer from "./footer";
import PackageGrid from "./package-grid";
import PackageButtons from "./package-buttons";

export default function SideMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerBox}>
          <DataTeam />
        </div>

        <HorizontalLine />

        <PackageGrid>
          <PackageButtons time="15:32:51" />
          <PackageButtons time="15:32:51" />
          <PackageButtons time="15:32:51" />
          <PackageButtons time="15:32:51" />
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
      <Footer />
    </div>
  );
}
