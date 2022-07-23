import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import UploadFile from "./UploadFile/UploadFile";
import styles from "./UploadModal.module.css";

export default function UploadModal() {
  const [open, setOpen] = useState(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.main}>
          <h2>File Upload</h2>

          <p>
            Please upload your artwork as a vector PDF file. Make sure that your
            designs include bleed areas. Also make sure the bleed lines are
            removed.
          </p>

          <hr />

          <div className={styles.uploadFile}>
            <UploadFile />
          </div>
          <button type="button" onClick={onCloseModal}>
            Done
          </button>
        </div>
      </Modal>
    </div>
  );
}
