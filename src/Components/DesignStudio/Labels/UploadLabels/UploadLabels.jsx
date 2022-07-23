import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import UploadModal from "../UploadModal/UploadModal";
import PriceModal from "../PriceModal/PriceModal";
import SuccessModal from "../../../Common Components/Modals/SuccessModal/SuccessModal";
import styles from "./UploadLabels.module.css";

export default function UploadLabels({ homeTab }) {
  const [uploadModal, setUploadModal] = useState(false);
  const [priceModal, setPriceModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const products = [
    { id: 1, name: "African Mango Drops" },
    { id: 2, name: "African Mango Capsules" },
    { id: 3, name: "Cholorello" },
    { id: 4, name: "Neuro-Plus Nootropic" },
    { id: 5, name: "Neuro-Plus" },
  ];

  const [labels, setLabels] = useState(products);

  return (
    <div className={styles.main}>
      <h4>
        NOTE: Please make sure to upload your label in PDF format ready for
        print
      </h4>

      <div className={styles.searchBar}>
        <input type="text" placeholder="Search" required />
        <button>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        </button>
      </div>

      <div className={styles.labels}>
        <table cellSpacing={10}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {labels.length > 0 ? (
              labels.map((label) => (
                <tr key={label.id}>
                  <td>{label.id}</td>
                  <td>{label.name}</td>
                  <td>
                    <button
                      className={styles.uploadButton}
                      onClick={() => setUploadModal(true)}
                    >
                      Upload
                    </button>
                    <button
                      className={styles.setPriceButton}
                      onClick={() => setPriceModal(true)}
                    >
                      Set price
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <span>No products added yet!</span>
            )}
          </tbody>
        </table>
      </div>

      <button className={styles.button} onClick={() => setSuccessModal(true)}>
        Send for approval
      </button>

      {priceModal && <PriceModal />}
      {uploadModal && <UploadModal />}
      {successModal && (
        <SuccessModal
          message="Thank you very much! Our compliance typically takes 4-6 business
          days to approve all labels."
          goHome="logo"
          goBack={homeTab}
          goForward="#"
          backButton="Home"
          forwardButton="Next"
        />
      )}
    </div>
  );
}
