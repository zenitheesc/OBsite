import React from "react";
import { useState } from "react";
import { buildJSON } from "../services/build-json";
import { getTemplate } from "../services/get-template";
import styles from "../styles/data-view.module.css";
import { json2csv, json2csvAsync } from "json-2-csv";
import { useEffect } from "react";


export default function DataView(props) {
  const { teamId, jsonExample, selectedPackages } = props;
  const [converterType, converterTypeSetter] = useState("JSON");

  const [bytesView, bytesViewSetter] = useState([]);
  const [rawView, rawViewSetter] = useState([]);
  const [jsonView, jsonViewSetter] = useState([]);
  const [csvView, csvViewSetter] = useState([]);
  const [rawCsvView, rawCsvViewSetter] = useState([]);
  return (
    <section className={styles.container}>
      <div className={styles.displayHeader}>
        <select
          onChange={(evt) => {
            converterTypeSetter(evt.target.value);
          }}
        >
          {viewOptions.map((viewOption, idx) => (
            <option key={idx}>{viewOption}</option>
          ))}
        </select>
        <h1>Equipe: {teamId} </h1>
        <button onClick={downloadFile}>baixar</button>
      </div>

      <div className={styles.displayBody}>
        <pre>{views[converterType]}</pre>
      </div>
    </section>
  );
}
