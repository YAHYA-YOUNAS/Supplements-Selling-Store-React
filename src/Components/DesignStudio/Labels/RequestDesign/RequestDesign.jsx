import React, { useState } from "react";
import Plan from "./Plan/Plan";
import styles from "./RequestDesign.module.css";
import RequestLabel from "./RequestLabel/RequestLabel";

export default function RequestDesign({ setClicked, homeTab }) {
  const [isChecked, setIsChecked] = useState(false);

  const [click, setClick] = useState(false);
  const [alert, setAlert] = useState(false);

  return (
    <>
      {" "}
      {!click ? (
        <div className={styles.main}>
          <button onClick={() => setClicked(false)}>Back</button>

          <div className={styles.middle}>
            <Plan quantity="1-5" />
            <Plan quantity="6-20" />
            <Plan quantity="21-50" />
            <Plan quantity="50+" />
          </div>

          <div className={styles.end}>
            <div className={styles.agreement}>
              <input
                type="checkbox"
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
        <RequestLabel setClicked={setClicked} homeTab={homeTab} />
      )}
    </>
  );
}
