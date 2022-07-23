import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import SuccessModal from "../../../../Common Components/Modals/SuccessModal/SuccessModal";
import styles from "./ConfirmationModal.module.css";

export default function ConfirmationModal({ image, homeTab }) {
  const [confirmed, setConfirmed] = useState(false);
  const [open, setOpen] = useState(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.main}>
          <div className={styles.left}>
            <h3>Are you sure you want to select this label template?</h3>
            <button onClick={onCloseModal} className={styles.backButton}>
              No, take me back to templates
            </button>
            <button
              onClick={() => setConfirmed(true)}
              className={styles.forwardButton}
            >
              Yes, I want this label!
            </button>
          </div>

          <div className={styles.right}>
            <img src={image} />
          </div>
        </div>

        {confirmed && (
          <SuccessModal
            message="You have successfully selected one of our label templates!"
            goHome="logo"
            goBack={homeTab}
            goForward=""
            backButton="Home"
            forwardButton="Next"
          />
        )}
      </Modal>
    </div>
  );
}
