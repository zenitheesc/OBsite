import React from "react";
import { useState } from "react";
import styles from "../styles/data-team.module.css";

export default function DataTeam({ idSetter, jsonSetter }) {
  const [teamTempID, teamTempIDSetter] = useState();
  const [jsonExample, jsonExampleSetter] = useState(null);

  const changeJsonExample = (event) => {
    let reader = new FileReader();

    reader.onload = (event) => {
      try {
        jsonExampleSetter(JSON.parse(event.target.result));
      } catch {
        jsonExampleSetter(null);
        alert("O json inserido não é válido!");
      }
    };

    if (event.target.files[0]) reader.readAsText(event.target.files[0]);
  };

  const startReading = () => {
    if (jsonExample) {
      window.dispatchEvent(new CustomEvent("unselect-all"));
      jsonSetter(jsonExample);
      idSetter(teamTempID);
    } else {
      alert("Selecione um json como exemplo");
    }
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
        placeholder="ID"
        onChange={(evt) => {
          teamTempIDSetter(evt.target.value);
        }}
        value={teamTempID}
      />
      <label htmlFor="Upload" className={styles.labelFile}>
        JSON
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
