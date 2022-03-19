import React from "react";

//Components
import styles from "../styles/SideMenu.module.css";
import DataTeam from "./DataTeam";
import HorizontalLine from "./HorizontalLine";
import Footer from "./Footer";
import PackageGrid from "./PackageGrid";
import PackageButtons from "./PackageButtons";

//Hooks
import { usePackageFetch } from "../hooks/usePackageFetch";

export default function SideMenu() {
  const {
    template,
    setTemplate,
    packages,
    setPackages,
    searchingPackages,
    error
  } = usePackageFetch();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.headerBox}>
          <DataTeam></DataTeam>
        </div>

        <HorizontalLine></HorizontalLine>

        <PackageGrid>
          <PackageButtons time="15:32:51" />
          {packages.packagesList.map(pack => (
            <PackageButtons time = {pack.time}></PackageButtons>
          ))}
        </PackageGrid>
      </div>
      <Footer></Footer>
    </div>
  );
}
