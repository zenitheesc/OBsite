import React from "react";
import styles from "../styles/SideMenuButton.module.css";
import {BsUpload} from 'react-icons/bs';

export default function UploadButton() {
  return (
    <button className={styles.button}>
        <div className={styles.iconBox}>
            <BsUpload></BsUpload> 
        </div>
        Upload
    </button>
  );
}
