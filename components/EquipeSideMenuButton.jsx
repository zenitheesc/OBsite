import React from "react";
import styles from "../styles/DataTeam.module.css";

export default function TeamButton() {
  return (
    <>
      <input className={styles.input} type="text" name="DataTeam" id="DataTeam"></input>
      <label for="DataTeam" className={styles.button}> UPLOAD </label>      
    </>
  );
}
