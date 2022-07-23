import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import bottle from "../../../assets/bottle.png";
import MagnifyModal from "../../Catalog/MagnifyModal/MagnifyModal";
import styles from "./Card.module.css";

export default function Card({ product, setCartClicked }) {
  const [magnifierClicked, setMagnifierClicked] = useState(false);

  const { title, price, packaging, dimensions } = product;

  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <img src={bottle} />
          <div>{title}</div>
        </div>

        <div className={styles.back}>
          <h3>{title}</h3>

          <div className={styles.details}>
            <span>Price: ${price}</span>
            <span>Packaging: {packaging}</span>
            <span>Dimensions: {dimensions}</span>
          </div>

          <div className={styles.icons}>
            <span onClick={() => setMagnifierClicked(true)}>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <span onClick={() => setCartClicked(true)}>
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </div>
        </div>
      </div>

      {magnifierClicked && (
        <MagnifyModal
          setMagnifierClicked={setMagnifierClicked}
          productDetails={product}
          labelDetails={product.labelDetails}
        />
      )}
    </div>
  );
}
