import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ThankYouModal from "../../Common Components/Modals/ThankYouModal/ThankYouModal";
import styles from "./ConnectionModal.module.css";

function ConnectionModal() {
  const [clicked, setClicked] = useState(false);

  const [open, setOpen] = useState(true);

  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.main}>
          <h2>Connect</h2>
          <p>
            Please understand that all domain companies are different. So, to
            connect your domain, there will be a manual process by our tech
            support team. Please delegate admin access to the following e-mail
            address, so we can connect your site ASAP.
          </p>
          <h4>domainsupport@suplementssellingsecrets.com</h4>
          <p>Select the completed button once you have done so.</p>
          <button type="button" onClick={() => setClicked(true)}>
            Completed
          </button>
        </div>
      </Modal>
      {clicked && (
        <ThankYouModal description="Our tech support team will handle immediately" />
      )}
    </div>
  );
}

export default ConnectionModal;
