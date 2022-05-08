import React from "react";
import styles from "../styles/side-menu.module.css";
import DataTeam from "./data-team";
import HorizontalLine from "./horizontal-line";
import Footer from "./footer";
import PackageGrid from "./package-grid";
import PackageButtons from "./package-buttons";

import firebase from "../firebase/client-app";
import { useCollection } from "react-firebase-hooks/firestore";
import { useState } from "react";
import { useEffect } from "react";

export default function SideMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerBox}>
          <HorizontalLine />
        </div>

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
