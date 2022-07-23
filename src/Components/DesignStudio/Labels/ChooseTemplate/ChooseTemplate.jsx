import React, { useState } from "react";
import white from "../../../../assets/supplements-bottle-white.png";
import black from "../../../../assets/supplements-bottle-black.png";
import LabelCard from "./LabelCard/LabelCard";
import RequestDesign from "../RequestDesign/RequestDesign";
import styles from "./ChooseTemplate.module.css";

export default function ChooseTemplate({ homeTab }) {
  const allTemplates = [
    {
      id: 1,
      image: white,
    },
    {
      id: 2,
      image: black,
    },
    {
      id: 3,
      image: white,
    },
    {
      id: 4,
      image: black,
    },
    {
      id: 5,
      image: white,
    },
    {
      id: 6,
      image: black,
    },
    {
      id: 7,
      image: white,
    },
    {
      id: 8,
      image: black,
    },
    {
      id: 9,
      image: white,
    },
    {
      id: 10,
      image: black,
    },
    {
      id: 11,
      image: white,
    },
    {
      id: 12,
      image: black,
    },
  ];

  const [templates, setTemplates] = useState(allTemplates);
  const [clicked, setClicked] = useState(false);

  return (
    <>
      {!clicked ? (
        <div className={styles.main}>
          <h4>Choose Label Template</h4>

          <div className={styles.labels}>
            {templates.length > 0 ? (
              templates.map((template) => (
                <div key={template.id}>
                  <LabelCard template={template} homeTab={homeTab} />
                </div>
              ))
            ) : (
              <span>No Templates yet!</span>
            )}
          </div>

          <hr />

          <div className={styles.requestLabel}>
            <h4>Request Label Design</h4>
            <span>
              You can request custom made label design from our graphic
              designers
            </span>
            <button className={styles.button} onClick={() => setClicked(true)}>
              Request Label
            </button>
          </div>
        </div>
      ) : (
        <RequestDesign setClicked={setClicked} homeTab={homeTab} />
      )}
    </>
  );
}
