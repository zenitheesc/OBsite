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
  const [teamId, teamIdSetter] = useState(0);
  const [jsonExample, jsonExampleSetter] = useState();
  const [packageList, packageListSetter] = useState([]);

  const [binaries, binariesLoading, binariesError] = useCollection(
    firebase.firestore().collection("binary-data/users/" + (teamId || 0)),
    {}
  );

  useEffect(() => {
    const array = [];

    if (!binariesLoading && binaries) {
      binaries.docs.map((doc) => array.push(doc.data()));
    }

    array.sort((a, b) => (a.date < b.date ? 0 : -1));

    packageListSetter(array);
  }, [binaries, teamId, jsonExample]);

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
