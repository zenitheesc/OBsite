import React from "react";
import styles from "../styles/SideMenuButton.module.css";
import {BsUpload} from 'react-icons/bs';

export default function UploadButton() {
  return (
    <>
      <label for="arquivo" className={styles.button}> UPLOAD
        <div className={styles.iconBox}>
              <BsUpload></BsUpload> 
        </div>
        <input className={styles.input} type="file" name="arquivo" id="arquivo"></input>
      </label>      
    </>
  );
}
