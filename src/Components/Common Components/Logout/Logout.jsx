import React from "react";
import styles from "./Logout.module.css";
import logo from "../../../assets/logo.PNG";
import Login from "../Login/Login";

export default function Logout() {
  return (
    <div className={styles.main}>
      <h2>You have been logged out</h2>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <div>
          <Login />
        </div>
      </div>
    </div>
  );
}
