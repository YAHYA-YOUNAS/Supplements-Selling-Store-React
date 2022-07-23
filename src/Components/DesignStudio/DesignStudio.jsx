import React, { useState } from "react";
import Logo from "./Logo/Logo";
import Labels from "./Labels/Labels";
import NavButton from "./NavButton/NavButton";
import styles from "./DesignStudio.module.css";

export default function DesignStudio() {
  const [clicked, setClicked] = useState(false);
  const [activeTab, setActiveTab] = useState("logo");

  return (
    <div className={styles.main}>
      <h3 className={styles.heading}>DESIGN STUDIO</h3>
      <div className={styles.outer}>
        <div className={styles.navigation}>
          <NavButton
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name="logo"
            tabName="Logo"
          />
          <NavButton
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name="labels"
            tabName="Labels"
          />
          <NavButton
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name="webTemp"
            tabName="Website Templates"
          />
          <NavButton
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            name="mock"
            tabName="Mockup Generator"
          />

          <div>
            <NavButton
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              name="more"
              tabName="More"
            />
          </div>
        </div>

        <div className={styles.outlet}>
          {activeTab === "logo" ? <Logo setActiveTab={setActiveTab} /> : ""}
          {activeTab === "labels" ? <Labels homeTab={setActiveTab} /> : ""}
        </div>
      </div>
    </div>
  );
}
