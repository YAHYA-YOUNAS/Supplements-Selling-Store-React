import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import styles from "./PriceModal.module.css";

export default function PriceModal() {
  const options = [
    { label: "USD", value: "usd" },
    { label: "EUR", value: "eur" },
    { label: "JPY", value: "jpy" },
    { label: "GBP", value: "gbp" },
    { label: "AUD", value: "aud" },
    { label: "CAD", value: "cad" },
    { label: "CHF", value: "chf" },
    { label: "CNH", value: "cnh" },
    { label: "INR", value: "inr" },
    { label: "PKR", value: "pkr" },
  ];

  const [open, setOpen] = useState(true);
  const [currency, setCurrency] = useState("USD");
  const [price, setPrice] = useState(0);

  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={styles.main}>
          <h2>Price</h2>

          <p>
            Please select what is the retail price you will sell this product
            for on your site/store.
          </p>

          <hr />

          <div className={styles.currency}>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <input
              type="number"
              placeholder="0.00"
              min={0}
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button type="button" onClick={onCloseModal}>
            Done
          </button>
        </div>
      </Modal>
    </div>
  );
}
