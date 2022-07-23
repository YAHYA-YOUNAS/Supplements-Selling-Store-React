import React from "react";
import styles from "./NavButton.module.css";

export default function NavButton({ activeTab, setActiveTab, tabName, name }) {
  return (
    <div>
      <button
        className={activeTab === name ? styles.active : styles.button}
        onClick={() => setActiveTab(name)}
      >
        {tabName}
      </button>
    </div>
  );
}
