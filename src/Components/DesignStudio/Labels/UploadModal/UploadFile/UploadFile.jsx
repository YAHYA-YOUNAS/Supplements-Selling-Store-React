import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import UploadProgress from "../UploadProgress/UploadProgress";
import styles from "./UploadFile.module.css";

export default function UploadFile() {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const [selected, setSelected] = useState(null);

  // handle drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
      setSelected(e.dataTransfer.files[0]);
    }
  };

  // triggers when file is selected with click
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
      setSelected(e.target.files[0]);
    }
  };

  return (
    <form
      id={styles.formFileUpload}
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <input
          ref={inputRef}
          type="file"
          id={styles.inputFileUpload}
          accept=".pdf"
          onChange={handleChange}
        />
        <label
          id={styles.labelFileUpload}
          htmlFor={styles.inputFileUpload}
          className={dragActive ? styles.dragActive : ""}
        >
          <div>
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              color="#51ce10"
              size="2x"
            />
            <p>Drag file to upload</p>
          </div>
        </label>
      </div>

      <UploadProgress />

      {dragActive && (
        <div
          id={styles.dragFileElement}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
}
