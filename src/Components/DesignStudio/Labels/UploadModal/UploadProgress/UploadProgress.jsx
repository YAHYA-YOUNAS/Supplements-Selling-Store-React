import React, { useState } from "react";
import { Line } from "rc-progress";
import Upload from "rc-upload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import styles from "./UploadProgress.module.css";

export default function UploadProgress() {
  const [percentage, setPercentage] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState();
  const [fileSize, setFileSize] = useState();

  const props = {
    action: "https://httpbin.org/post",
    accept: ".pdf",
    beforeUpload(file) {
      // Start upload
      setIsUploading(true);
      // Set file details
      setFileName(file.name);
      setFileSize(Math.floor(file.size / 1000));
    },
    onSuccess() {
      // Finish upload
      setIsUploading(false);
    },
    onProgress(step) {
      // Update progress
      setPercentage(Math.round(step.percent));
    },
    onError(err) {
      console.log("onError", err);
    },
  };

  return (
    <div className={styles.main}>
      {fileName && (
        <>
          <div className={styles.uploadList}>
            <div className={styles.fileName}>
              <FontAwesomeIcon icon={faFilePdf} size="2x" />
              <b
                style={{ width: "200px", textAlign: "left" }}
              >{`${fileName.substring(0, 20)}...`}</b>
              <b style={{ marginLeft: "10px" }}>{fileSize + "KB"}</b>
            </div>
            <div className={styles.progressContainer}>
              <Line
                percent={percentage}
                strokeWidth={1.5}
                trailWidth={1.5}
                trailColor="#FFF"
                strokeColor="#92ed14"
              />
            </div>
            <div className={styles.progressText}>
              <span>{isUploading ? `${percentage}% done` : `Finished`}</span>
              <span> {`${fileSize} KB/sec`}</span>
            </div>
          </div>
        </>
      )}

      <Upload {...props}>
        <button id={styles.uploadButton}>Upload File</button>
      </Upload>
    </div>
  );
}
