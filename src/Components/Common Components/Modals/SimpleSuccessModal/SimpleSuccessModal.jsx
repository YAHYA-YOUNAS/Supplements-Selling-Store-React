import React, { useState } from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import styles from "./SimpleSuccessModal.module.css";

export default function SimpleSuccessModal({ message }) {
  const [open, setOpen] = useState(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.main}>
          <h2>Success!</h2>
          <p>{message}</p>
          <FontAwesomeIcon
            icon={faCheckCircle}
            color="#51ce10"
            size="4x"
            style={{ marginTop: "20px" }}
          />
        </div>
      </Modal>
    </div>
  );
}
