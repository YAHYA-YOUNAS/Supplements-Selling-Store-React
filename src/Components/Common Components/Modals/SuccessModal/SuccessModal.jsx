import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./SuccessModal.module.css";

export default function SuccessModal(props) {
  const {
    message,
    setState,
    goBack,
    goHome,
    goForward,
    backButton,
    forwardButton,
  } = props;
  const [open, setOpen] = useState(true);
  const onCloseModal = () => {
    if (setState) {
      setState(false);
    }
    goBack(goHome);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.main}>
          <h1>Success!</h1>

          <FontAwesomeIcon
            icon={faCheckCircle}
            color="#51ce10"
            size="4x"
            style={{ marginTop: "20px" }}
          />

          <p>{message}</p>

          <div>
            <button onClick={onCloseModal}>{backButton}</button>

            <button className={styles.link} onClick={() => goBack(goForward)}>
              {forwardButton}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
