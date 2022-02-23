import React from "react";
import SideMenu from "../components/SideMenu";
import styles from "../styles/Home.module.css";
//  import Head from "next/head";

export default function Home() {
  return(
    <div className={styles.container}>
      <SideMenu> </SideMenu>;
    </div>
  );
}
