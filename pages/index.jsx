import React from "react";
import SideMenu from "../components/side-menu";
import styles from "../styles/home.module.css";
import DataView from "../components/data-view";
import { useState } from "react";
import { isMobile } from "react-device-detect";

export default function Home() {
  const [teamId, teamIdSetter] = useState(0);
  const [jsonExample, jsonExampleSetter] = useState();
  const [selectedPackages, selectedPackagesSetter] = useState([]);

  return (<div>
    {(() => {
      if (isMobile) {

        return (

          <div className={styles.block_screen}>
            Por favor, visualize este site através de um computador ou do modo de visualização desktop de seu navegador mobile.</div>

        )

      } else {

        return (
          <div className={styles.container}>
            <SideMenu
              teamId={teamId}
              teamIdSetter={teamIdSetter}
              jsonExample={jsonExample}
              jsonExampleSetter={jsonExampleSetter}
              selectedPackages={selectedPackages}
              selectedPackagesSetter={selectedPackagesSetter}
            />
            <DataView
              teamId={teamId}
              jsonExample={jsonExample}
              selectedPackages={selectedPackages}
            />
          </div>)

      }

    })()}
  </div>

  );

}
