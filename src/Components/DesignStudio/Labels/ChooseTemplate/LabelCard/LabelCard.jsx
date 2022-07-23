import React, { useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import ViewModal from "../ViewModal/ViewModal";
import styles from "./LabelCard.module.css";

export default function LabelCard({ template, homeTab }) {
  const [viewModal, setViewModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);

  return (
    <div className={styles.main}>
      <div>
        <img src={template.image} />
      </div>

      <div className={styles.buttons}>
        <button
          className={styles.viewButton}
          onClick={() => setViewModal(true)}
        >
          View
        </button>
        <button
          className={styles.selectButton}
          onClick={() => setConfirmationModal(true)}
        >
          Select
        </button>
      </div>

      {viewModal && <ViewModal image={template.image} />}
      {confirmationModal && (
        <ConfirmationModal image={template.image} homeTab={homeTab} />
      )}
    </div>
  );
}
