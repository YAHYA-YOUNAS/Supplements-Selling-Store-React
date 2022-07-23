import React, { useState } from "react";
import Request from "../Request/Request";
import styles from "./StartRequest.module.css";

export default function StartRequest({ setClicked, setActiveTab }) {
  const [isChecked, setIsChecked] = useState(false);
  const [click, setClick] = useState(false);
  const [alert, setAlert] = useState(false);

  return (
    <>
      {!click ? (
        <div className={styles.main}>
          <button onClick={() => setClicked(false)}>Back</button>

          <div className={styles.middle}>
            <h1>$000,00</h1>
            <span>
              This price gives you 2 initial designs and up to 3 revisions of
              the design you choose.
            </span>
          </div>

          <div className={styles.end}>
            <div className={styles.agreement}>
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                value="checked"
                checked={isChecked}
                onChange={(e) => {
                  setIsChecked(!isChecked);
                  setAlert(false);
                }}
              />
              <span style={{ color: alert ? "red" : "inherit" }}>
                {" "}
                I understand that by checking this box I will be charged $000,00
                for the design of the logo that I requested and will own all
                rights of it.
              </span>
            </div>
            <button
              onClick={() => (isChecked ? setClick(true) : setAlert(true))}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <Request setClicked={setClicked} setActiveTab={setActiveTab} />
      )}
    </>
  );
}
