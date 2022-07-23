import React, { useState } from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import styles from "./ThankYouModal.module.css";

function ThankYouModal({ description }) {
  const [open, setOpen] = useState(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.main}>
          <h2>Thank You!</h2>
          <p>{description}</p>
          <FontAwesomeIcon icon={faCheckCircle} color="#51ce10" size="3x" />
        </div>
      </Modal>
    </div>
  );
}

export default ThankYouModal;
