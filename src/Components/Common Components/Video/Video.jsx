import React from "react";
import youtube from "../../../assets/youtube.png";
import logo from "../../../assets/logo.PNG";
import styles from "./Video.module.css";

export default function Video({ title }) {
  return (
    <div className={styles.main}>
      <div>
        <h1>{title}</h1>
        <img src={youtube} className={styles.youtube} />
      </div>

      <img src={logo} className={styles.logo} />
    </div>
  );
}
