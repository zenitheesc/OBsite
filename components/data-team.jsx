import React from "react";
import { useState } from "react";
import styles from "../styles/data-team.module.css";

export default function DataTeam({ idSetter, jsonSetter }) {
  const [teamTempID, teamTempIDSetter] = useState(0);
  const [jsonExample, jsonExampleSetter] = useState({});

  const changeJsonExample = (event) => {
    let reader = new FileReader();

    reader.onload = (event) => {
      try {
        jsonExampleSetter(JSON.parse(event.target.result));
      } catch {
        alert("O json inserido não é válido!");
      }
    };

    reader.readAsText(event.target.files[0]);
  };

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
        onChange={(evt) => {
          teamTempIDSetter(evt.target.value);
        }}
        value={teamTempID}
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
