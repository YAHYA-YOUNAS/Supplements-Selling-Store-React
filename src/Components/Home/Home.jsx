import React from "react";
import Button from "../Common Components/Button/Button";
import Video from "../Common Components/Video/Video";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.main}>
      <h3 className={styles.heading}>SYSTEM OVERVIEW</h3>
      <Video title={"TITLE OF THE VIDEO"} />
      <div className={styles.buttons}>
        <Button title="Domain" backColor={"#0AF1B9"} />
        <Button title="My Profile/Settings" backColor={"#51CE10"} />
        <Button title="Catalog" backColor={"#0F9CEB"} />
        <Button title="Design Studio" backColor={"#A037D2"} />
        <Button title="My Stores" backColor={"#F45C5B"} />
        <Button title="Merchant" backColor={"#0F9CEB"} />
        <Button title="My VoIP" backColor={"#51CE10"} />
        <Button title="Go Live" backColor={"#0AF1B9"} />
      </div>
    </div>
  );
}

export default Home;
