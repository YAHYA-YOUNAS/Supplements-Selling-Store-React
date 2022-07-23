import React, { useState } from "react";
import { faCheck, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConnectionModal from "./ConnectionModal/ConnectionModal";
import styles from "./Domain.module.css";
import SimpleSuccessModal from "../Common Components/Modals/SimpleSuccessModal/SimpleSuccessModal";

function Domain() {
  const [domainName, setdomainName] = useState("");
  const [domain, setDomain] = useState("");
  const [availability, setAvailability] = useState(false);

  const [clicked, setClicked] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setAvailability(!availability);
  };

  const handleConnect = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.main}>
      <h3 className={styles.heading}>CHOOSE A DOMAIN</h3>
      <div className={styles.forms}>
        <form onSubmit={handleSearch} className={styles.form}>
          <h4>Get a Domain Name</h4>
          <hr />
          <input
            type="text"
            value={domainName}
            onChange={(e) => setdomainName(e.target.value)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} color="white" /> Search
          </button>
          {availability === false ? (
            <div className={styles.notAvailable}>
              <FontAwesomeIcon
                icon={faXmark}
                color="red"
                style={{ fontSize: "22px", marginRight: "10px" }}
              />
              <span>The domain you searched is not available</span>
            </div>
          ) : (
            <div className={styles.available}>
              <FontAwesomeIcon
                icon={faCheck}
                color="#51ce10"
                style={{ fontSize: "22px", marginRight: "10px" }}
              />
              <span>The domain you searched is available!</span>
              <button type="button" onClick={() => setClicked(!clicked)}>
                Get It!
              </button>
            </div>
          )}
        </form>

        <br />
        <br />
        <br />

        <form onSubmit={handleConnect} className={styles.form}>
          <h4>Connect a Domain You Already Own</h4>
          <hr />
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <button type="submit">Connect</button>
        </form>
        {clicked && (
          <SimpleSuccessModal message="You just connected the domain!" />
        )}
        {!clicked && <ConnectionModal />}
      </div>
    </div>
  );
}

export default Domain;
