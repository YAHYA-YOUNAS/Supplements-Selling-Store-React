import React, { useState } from "react";
import { SketchPicker } from "react-color";
import Input from "../../../../Common Components/Input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SuccessModal from "../../../../Common Components/Modals/SuccessModal/SuccessModal";
import styles from "./RequestLabel.module.css";

export default function RequestLabel({ setClicked, homeTab }) {
  const [openModal, setOpenModal] = useState(false);

  const [companyName, setCompanyName] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [description, setDescription] = useState("");
  const [information, setInformation] = useState("");
  const [color, setColor] = useState("");
  const [colors, setColors] = useState("");
  const [slider, setSlider] = useState(50);

  const [picker, setPicker] = useState(false);

  // Files Upload
  const [image, setImage] = useState({
    name: "",
    url: null,
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileEvent = (e) => {
    const chosenFile = e.target.files[0];

    setImage((prevState) => ({
      ...prevState,
      name: e.target.files[0].name,
      url: URL.createObjectURL(chosenFile),
    }));

    handleUploadFiles(chosenFile);
  };

  const handleUploadFiles = (file) => {
    const uploaded = [...uploadedFiles];
    if (uploaded.findIndex((f) => f.name === file.name) === -1) {
      uploaded.push(file);
    }
    setUploadedFiles(uploaded);
  };

  const cancelUpload = () => {
    setUploadedFiles((current) =>
      current.filter((file) => {
        return file.name !== image.name;
      })
    );
    setImage((prevState) => ({
      ...prevState,
      name: "",
      url: null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  return (
    <div className={styles.main}>
      <button onClick={() => setClicked(false)}>Back</button>

      <div className={styles.headings}>
        <span>Requesting Custom Label Design</span>
        <br />
        <span>
          To request a custom label design, please provide these information
          listed below
        </span>
      </div>
      <hr />

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formInput}>
          <Input
            id="companyName"
            label="Company Name"
            type="text"
            value={companyName}
            setValue={setCompanyName}
          />
        </div>

        <div className={styles.formInput}>
          <Input
            id="productName"
            label="Product Name"
            type="text"
            value={productName}
            setValue={setProductName}
          />
        </div>

        <div className={styles.inputDiv}>
          <label htmlFor="productDescription">Description Of The Product</label>
          <textarea
            id="productDescription"
            cols="20"
            rows="5"
            required
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </div>

        <div className={styles.inputDiv}>
          <label htmlFor="description">
            Description Of The Product Target Audience
          </label>
          <textarea
            id="description"
            cols="20"
            rows="5"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {picker && (
          <div className={styles.colorPicker}>
            <SketchPicker
              color="#fff"
              disableAlpha
              onChangeComplete={(c) => setColor(c.hex)}
            />
          </div>
        )}

        <div className={styles.color}>
          <div className={styles.formInput}>
            <Input
              id="colors"
              label="Colors To Explore"
              type="text"
              value={colors}
              setValue={setColors}
            />
          </div>

          <span>or</span>

          <button type="button" onClick={() => setPicker(!picker)}>
            select from color picker
          </button>
        </div>

        <div className={styles.selector}>
          <span className={styles.heading}>Style Attributes</span>
          <div>
            <span>Classic</span>
            <span>Modern</span>
            <input
              type="range"
              min={0}
              max={100}
              step={25}
              value={slider}
              onChange={(e) => setSlider(e.target.value)}
            />
          </div>

          <div>
            <span>Mature</span>
            <span>Youthful</span>
            <input
              type="range"
              min={0}
              max={100}
              step={25}
              value={slider}
              onChange={(e) => setSlider(e.target.value)}
            />
          </div>

          <div>
            <span>Feminine</span>
            <span>Masculine</span>
            <input
              type="range"
              min={0}
              max={100}
              step={25}
              value={slider}
              onChange={(e) => setSlider(e.target.value)}
            />
          </div>

          <div>
            <span>Geometric</span>
            <span>Organic</span>
            <input
              type="range"
              min={0}
              max={100}
              step={25}
              value={slider}
              onChange={(e) => setSlider(e.target.value)}
            />
          </div>

          <div>
            <span>Economical</span>
            <span>Luxurious</span>
            <input
              type="range"
              min={0}
              max={100}
              step={25}
              value={slider}
              onChange={(e) => setSlider(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.inputDiv}>
          <label htmlFor="information">
            Additional Information For Designer
          </label>
          <textarea
            id="description"
            cols="20"
            rows="5"
            required
            value={information}
            onChange={(e) => setInformation(e.target.value)}
          />
        </div>

        <div className={styles.uploadFiles}>
          <span className={styles.heading}>Attachments</span>
          <div className={styles.uploadFirst}>
            <span> Upload existing designs that you like</span>
            <input
              className={styles.inputFile}
              type="file"
              accept="image/*"
              //   style={{ color: "transparent" }}
              onChange={handleFileEvent}
            />
          </div>
          {image.url !== null && (
            <>
              <div className={styles.displayFile}>
                <img src={image.url} />
                <FontAwesomeIcon
                  icon={faXmark}
                  size="lg"
                  className={styles.icon}
                  onClick={cancelUpload}
                />
              </div>

              <label htmlFor="fileButton" className={styles.fileButton}>
                + Add more{" "}
                <input
                  id="fileButton"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileEvent}
                />
              </label>
            </>
          )}
        </div>

        <button type="submit" className={styles.button}>
          Request Labels Design
        </button>
      </form>

      {openModal && (
        <SuccessModal
          message="You requested custom designed label! Our professional designers will
              get back to you as soon as your label is finished!"
          goHome="logo"
          goBack={homeTab}
          setState={setClicked}
          goForward=""
          backButton="Home"
          forwardButton="Next"
        />
      )}
    </div>
  );
}
