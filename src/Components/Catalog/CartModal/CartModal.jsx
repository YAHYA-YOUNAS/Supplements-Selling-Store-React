import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { Link } from "react-router-dom";
import styles from "./CartModal.module.css";

function CartModal({ setCartClicked }) {
  const [open, setOpen] = useState(true);
  const onCloseModal = () => {
    setCartClicked(false);
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.main}>
          <h2>YOU ADDED THIS PRODUCT!</h2>

          <p>
            NOTE: This product has been added under "Design Studio" inside
            "Labels"
          </p>

          <div>
            <Link to="/designStudio" className={styles.link}>
              Visit design studio
            </Link>

            <button type="button" onClick={onCloseModal}>
              Continue adding products
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CartModal;
