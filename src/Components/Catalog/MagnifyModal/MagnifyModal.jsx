import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import styles from "./MagnifyModal.module.css";
import "react-responsive-modal/styles.css";

function MagnifyModal(props) {
  const { setMagnifierClicked, productDetails, labelDetails } = props;

  const { title, price, packaging } = productDetails;
  const {
    suggestions,
    cautions,
    authorityNote,
    description,
    supplementFactsImage,
  } = labelDetails;

  const [open, setOpen] = useState(true);
  const onCloseModal = () => {
    setMagnifierClicked(false);
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.main}>
          <h4>About the Product</h4>
          <hr />

          <div className={styles.details}>
            <div>
              <label htmlFor="name">Name: </label>
              <span id="name"> {title}</span>
            </div>
            <div>
              <label htmlFor="price">Price: </label>
              <span id="price"> ${price}</span>
            </div>
            <div>
              <label htmlFor="packaging">Packaging: </label>
              <span id="packaging"> {packaging}</span>
            </div>
          </div>

          <h4>Copy of generic label</h4>

          <div className={styles.label}>
            <div>Bar-Code Zone</div>
            <div className={styles.left}>
              <div>
                <span>Suggested Use: </span>
                <span>{suggestions}</span>
              </div>
              <br />
              <div>
                <span>Caution: </span>
                <span>{cautions}</span>
              </div>
              <div>{authorityNote}</div>
            </div>

            <div className={styles.middle}>
              <h3>{title}</h3>
              <span>{description}</span>
            </div>

            <div className={styles.right}>
              <img src={supplementFactsImage} />
              <span>Manufactured for: </span>
            </div>
          </div>

          <Link to="download" className={styles.link}>
            Download
          </Link>
        </div>
      </Modal>
    </div>
  );
}

export default MagnifyModal;
