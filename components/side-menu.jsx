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

export default function SideMenu(props) {
  const {
    teamId,
    teamIdSetter,
    jsonExample,
    jsonExampleSetter,
    selectedPackages,
    selectedPackagesSetter,
  } = props;

  const [packageList, packageListSetter] = useState([]);

  const [binaries, binariesLoading, binariesError] = useCollection(
    firebase.firestore().collection("binary-data/users/" + (teamId || 0)),
    {}
  );

  const addPackage = (newPackage) => {
    const idx = selectedPackages.indexOf(newPackage);
    if (idx != -1) return;

    selectedPackages.push(newPackage);
    selectedPackages.sort((a, b) =>
      a["time-stamp"] < b["time-stamp"] ? 0 : -1
    );

    selectedPackagesSetter([...selectedPackages]);
  };

  const removePackage = (oldPackage) => {
    const idx = selectedPackages.indexOf(oldPackage);
    selectedPackages.splice(idx, 1);
    if (idx == -1) return;
    selectedPackages.sort((a, b) =>
      a["time-stamp"] < b["time-stamp"] ? 0 : -1
    );
    selectedPackagesSetter([...selectedPackages]);
  };

  useEffect(() => {
    const array = [];
    selectedPackagesSetter([]);
    if (!binariesLoading && binaries) {
      binaries.docs.map((doc) => array.push(doc.data()));
    }

    array.sort((a, b) => (a["time-stamp"] < b["time-stamp"] ? 0 : -1));

    packageListSetter(array);
  }, [binaries, teamId, jsonExample]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerBox}>
          <DataTeam idSetter={teamIdSetter} jsonSetter={jsonExampleSetter} />
          <HorizontalLine />
        </div>

        <PackageGrid>
          {packageList.map((packageData, key) => (
            <PackageButtons
              key={key}
              package={packageData}
              onAdd={addPackage}
              onRemove={removePackage}
            />
          ))}
        </PackageGrid>
      </div>
      <Footer />
    </div>
  );
}
