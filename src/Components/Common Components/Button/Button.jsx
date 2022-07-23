import React from "react";
import styles from "./Button.module.css";

export default function ({ title, backColor }) {
  return (
    <div>
      <button style={{ backgroundColor: backColor }} className={styles.main}>
        {title}
      </button>
    </div>
  );
}
