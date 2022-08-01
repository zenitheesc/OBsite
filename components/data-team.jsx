import React from "react";
import { useState } from "react";
import styles from "../styles/data-team.module.css";
import { MdSearch } from "react-icons/md";

export default function DataTeam({ idSetter, jsonSetter, dateSetter }) {
  const [teamTempID, teamTempIDSetter] = useState();
  const [jsonExample, jsonExampleSetter] = useState(null);
  const [fileName, fileNameSetter] = useState("modelo");
  const [tempDate, tempDateSetter] = useState(
    new Date().toISOString().split("T")[0]
  );

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

    if (!event.target.files[0]) return;
    fileNameSetter(event.target.files[0].name);
    reader.readAsText(event.target.files[0]);
  };

  const startReading = () => {
    if (jsonExample) {
      window.dispatchEvent(new CustomEvent("unselect-all"));
      jsonSetter(jsonExample);
      idSetter(teamTempID || 0);
      dateSetter(tempDate);
    } else {
      alert("Selecione um json como exemplo");
    }
  };

  return (
    <section className={styles.container}>
      <div>
        <input
          type="number"
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
        <input
          className={styles.inputDate}
          type="date"
          value={tempDate}
          onChange={(evt) => tempDateSetter(evt.target.value)}
        />
      </div>
      <div>
        <label htmlFor="Upload" className={styles.labelFile}>
          {fileName}
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
        <button
          type="button"
          text="save"
          onClick={startReading}
          className={styles.inputSearch}
        >
          <MdSearch />
        </button>
      </div>
    </section>
  );
}
