import React from "react";
import styles from "./Input.module.css";

export default function Input({ id, label, type, value, setValue }) {
  return (
    <div className={styles.main}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
