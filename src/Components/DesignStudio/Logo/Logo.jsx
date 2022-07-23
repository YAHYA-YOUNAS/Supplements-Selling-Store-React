import React, { useState } from "react";
import StartRequest from "./StartRequest/StartRequest";
import styles from "./Logo.module.css";

export default function Logo({ setActiveTab }) {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!clicked ? (
        <div className={styles.main}>
          <div>
            <span>Request custom made logo</span>
            <br />
            <span>To start with custom made logo, please click the button</span>
          </div>
          <button onClick={() => setClicked(true)}>Start logo request</button>
        </div>
      ) : (
        <StartRequest setClicked={setClicked} setActiveTab={setActiveTab} />
      )}
    </>
  );
}
