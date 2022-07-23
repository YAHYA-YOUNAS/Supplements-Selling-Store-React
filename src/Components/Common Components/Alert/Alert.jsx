import React from "react";
import styles from "./Alert.module.css";

export default function Alert({ count }) {
  return <div className={styles.main}>{count}</div>;
}
