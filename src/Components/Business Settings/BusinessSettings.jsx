import React, { useState } from "react";
import SimpleSuccessModal from "../Common Components/Modals/SimpleSuccessModal/SimpleSuccessModal";
import styles from "./BusinessSettings.module.css";

function BusinessSettings() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");

  const [clicked, setClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(selectedFile);
  };

  return (
    <div className={styles.main}>
      <h3 className={styles.heading}>BUSINESS SETTINGS</h3>
      <div className={styles.outer}>
        {showModal && (
          <SimpleSuccessModal message="Your Business Settings have been saved" />
        )}
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <h4>My Business Settings:</h4>
          {clicked && (
            <div className={styles.note}>
              <p>
                NOTE: Please upload vector file logo (PDF, EPS or Ai) that is no
                longer than 10MB
              </p>
            </div>
          )}
          <div className={styles.uploadLogo}>
            <label htmlFor="logo">Upload your own logo</label>
            <input
              id="logo"
              type="file"
              accept=".pdf,.eps,.ai"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              onClick={() => setClicked(true)}
            />
          </div>
          <p>
            No logo? Do not worry, when you go to the design studio you can
            request logo design there!
          </p>

          <div className={styles.inputSection}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputSection}>
            <label htmlFor="address">Street Address:</label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputSection}>
            <label htmlFor="city">City:</label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputSection}>
            <label htmlFor="state">State:</label>
            <input
              id="state"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputSection}>
            <label htmlFor="zipCode">ZIP/Postal Code:</label>
            <input
              id="zipCode"
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputSection}>
            <label htmlFor="country">Country:</label>
            <input
              id="country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <button type="submit" onClick={() => setShowModal(!showModal)}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default BusinessSettings;
