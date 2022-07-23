import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import styles from "./ViewModal.module.css";

export default function ViewModal({ image }) {
  const [open, setOpen] = useState(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.main}>
          <img src={image} />
        </div>
      </Modal>
    </div>
  );
}
