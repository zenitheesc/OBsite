import React from "react";
import { useState } from "react";
import styles from "../styles/data-team.module.css";

export default function DataTeam({ idSetter, jsonSetter }) {
  const [teamTempID, teamTempIDSetter] = useState(0);
  const [jsonExample, jsonExampleSetter] = useState({});

  const startReading = () => {
    jsonSetter(jsonExample);
    idSetter(teamTempID);
  };

  return (
    <>
      <input
        type="number"
        name="Equipe"
        id="Equipe"
        min="1"
        max="100"
        className={styles.inputNumber}
        placeholder="Número da equipe"
      />
      <label htmlFor="Upload" className={styles.labelFile}>
        Upload
        <input
          type="file"
          name="Upload"
          id="Upload"
          accept="application/JSON"
          className={styles.inputFile}
          placeholder="Upload"
          onChange={changeJsonExample}
        />
      </label>
      <input
        type="button"
        name="Upload"
        id="Upload"
        accept="application/JSON"
        text="save"
        onClick={startReading}
      />
    </>
  );
}
