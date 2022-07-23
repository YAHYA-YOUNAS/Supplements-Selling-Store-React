import React, { useState } from "react";
import styles from "./Plan.module.css";

export default function Plan({ quantity }) {
  const [upperChecked, setUpperChecked] = useState(false);
  const [lowerChecked, setLowerChecked] = useState(false);

  return (
    <div className={styles.main}>
      <h1>{quantity}</h1>
      <div className={styles.card}>
        <div className={styles.upper}>
          <span>1 custom made template for {quantity} of your products</span>
          <h2>$00,00</h2>
          <input
            type="checkbox"
            value="checked"
            checked={upperChecked}
            onChange={(e) => {
              setUpperChecked(!upperChecked);
              setLowerChecked(false);
            }}
          />
        </div>
        <hr />
        <div className={styles.lower}>
          <span>
            {quantity} different label designs for {quantity} of your products
          </span>
          <h2>$00,00</h2>
          <input
            type="checkbox"
            value="checked"
            checked={lowerChecked}
            onChange={(e) => {
              setLowerChecked(!lowerChecked);
              setUpperChecked(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}
