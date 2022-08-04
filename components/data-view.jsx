import React from "react";
import { useState } from "react";
import { buildJSON } from "../services/build-json";
import { getTemplate } from "../services/get-template";
import styles from "../styles/data-view.module.css";
import { json2csv, json2csvAsync } from "json-2-csv";
import { useEffect } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const jsonBaseExample = {
  equipe: 0,
  bateria: 24,
  temperatura: 30,
  pressao: 1,
  giroscopio: [42, 90, 30],
  acelerometro: [10, 3, 4],
  payload: {
    valor1: 420.1415,
    classe: {
      array1: [69, 123, 543],
      valor2: "neste log a temperatura medida foi de 200 graus centigrados",
    },
  },
};

export default function DataView(props) {
  const { teamId, jsonExample, selectedPackages } = props;
  const [converterType, converterTypeSetter] = useState("JSON");

  const [bytesView, bytesViewSetter] = useState([]);
  const [rawView, rawViewSetter] = useState([]);
  const [jsonView, jsonViewSetter] = useState([]);
  const [csvView, csvViewSetter] = useState([]);
  const [rawCsvView, rawCsvViewSetter] = useState([]);

  const viewOptions = ["JSON", "CSV", "BYTES", "RAW", "RAW_CSV"];
  const parser = (json) => JSON.stringify(json, null, 4);

  const converters = {
    JSON: (selectedPackages) => {
      let json = selectedPackages.map((data) =>
        buildJSON(data.binary, jsonExample || jsonBaseExample)
      );
      jsonViewSetter(parser(json));
    },

    BYTES: (selectedPackages) => {
      let bytesList = selectedPackages.map((data) => data.binary);
      bytesViewSetter(parser([...bytesList]));
    },

    RAW: (selectedPackages) => {
      rawViewSetter(parser(selectedPackages));
    },

    CSV: (selectedPackages) => {
      const jsonList = selectedPackages.map((data) =>
        buildJSON(data.binary, jsonExample || jsonBaseExample)
      );
      json2csv(jsonList, (err, csv) => csvViewSetter(csv), {
        delimiter: {
          field: ", ",
          eol: "\n",
        },
      });
    },

    RAW_CSV: (selectedPackages) => {
      json2csv(selectedPackages, (err, csv) => rawCsvViewSetter(csv), {
        delimiter: {
          field: ", ",
          eol: "\n",
        },
      });
    },
  };

  useEffect(() => {
    converters[converterType](selectedPackages);
  }, [selectedPackages, converterType]);

  const views = {
    JSON: jsonView,
    BYTES: bytesView,
    RAW: rawView,
    CSV: csvView,
    RAW_CSV: rawCsvView,
  };

  const downloadFile = async () => {
    const myData = views[converterType];
    const extension =
      converterType == "CSV" || converterType == "RAW_CSV" ? "csv" : "json";

    const fileName = "data." + extension;

    const blob = new Blob([myData], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = href;
    link.download = fileName;
    link.click();
  };

  return (
    <section className={styles.container}>
      <div className={styles.displayHeader}>
        <select className={styles.dropdown}
          onChange={(evt) => {
            converterTypeSetter(evt.target.value);
          }}
        >
          {viewOptions.map((viewOption, idx) => (
            <option key={idx}>{viewOption}</option>
          ))}
        </select>
        <h1>Equipe: {teamId} </h1>
        <MdOutlineFileDownload size={28} onClick={downloadFile} />
      </div>

      <div className={styles.displayBody}>
        <pre>{views[converterType]}</pre>
      </div>
    </section>
  );
}
