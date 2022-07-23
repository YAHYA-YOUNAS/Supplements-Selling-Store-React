import React, { useState } from "react";
import NavButton from "../NavButton/NavButton";
import ChooseTemplate from "./ChooseTemplate/ChooseTemplate";
import UploadLabels from "./UploadLabels/UploadLabels";
import styles from "./Labels.module.css";

export default function Labels({ homeTab }) {
  const [activeTab, setActiveTab] = useState("uploadLabels");

  return (
    <div className={styles.main}>
      <div className={styles.navigation}>
        <NavButton
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          name="uploadLabels"
          tabName="Upload your labels"
        />
        <NavButton
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          name="chooseTemplate"
          tabName="Request label design/Choose label template"
        />
      </div>

      <div className={styles.outlet}>
        {activeTab === "uploadLabels" ? <UploadLabels homeTab={homeTab} /> : ""}
        {activeTab === "chooseTemplate" ? (
          <ChooseTemplate homeTab={homeTab} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
