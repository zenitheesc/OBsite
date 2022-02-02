import React from "react";
import styles from "../styles/DataTeam.module.css";
import {BsUpload} from 'react-icons/bs';

export default function DataTeam() {
  return (
    <>
        <form>
            <label for="Equipe" className={styles.button}> EQUIPE </label>      
            <input className={styles.input} type="text" name="Equipe" id="Equipe"></input>

                <div className={styles.button}>
                    <BsUpload></BsUpload>
                    <label for="Upload" > UPLOAD </label>      
                </div>
            <input className={styles.input} type="file" name="Upload" id="Upload"></input>
        </form>
    </>
  );
}
