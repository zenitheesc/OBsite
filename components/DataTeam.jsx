import React from "react";
import styles from "../styles/DataTeam.module.css";
import {BsUpload} from 'react-icons/bs';

export default function DataTeam() {
  return (
    <>
        <form>
          <div className="box">
            <input type="number" name="Equipe" id="Equipe" min="1" max="100" className={styles.inputNumber} placeholder="Número da equipe"></input>

            <label for="Upload" className={styles.labelFile}>Upload</label>      
            <input type="file" name="Upload" id="Upload" className={styles.inputFile} placeholder="Upload"></input>
          </div>

        </form>
    </>
  );
}
