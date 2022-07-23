import React, { useState } from "react";
import user from "../../../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from "../../../assets/avatar.png";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import styles from "./Chat.module.css";

export default function Chat() {
  const [newMessage, setNewMessage] = useState("");

  const received = [
    {
      message: "Hello! How may I assist you?",
    },
    {
      message: "Yeah sure..",
    },
    {
      message:
        "Of course, I will be happy to work with you. Kindly share the details..",
    },
  ];

  const sent = [
    {
      message: "Hi there!",
    },
    {
      message: "I would like to ask something",
    },
    {
      message:
        "I want to take help from you in my project. Are you available? ",
    },
  ];

  const [receivedMessages, setReceivedMessages] = useState(received);
  const [sentMessages, setSentMessages] = useState(sent);

  const handleClick = () => {
    const sentMsg = {
      message: newMessage,
    };

    const receivedMsg = {
      message: "Typing...",
    };

    setReceivedMessages((received) => [...received, receivedMsg]);
    setSentMessages((sent) => [...sent, sentMsg]);
    setNewMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.main}>
      <h4>
        GRAPHIC DESIGNER <span className={styles.status}>●</span>
      </h4>

      <hr />

      <div className={styles.chatArea}>
        <p className={styles.displayTime}>
          {"Today, " +
            new Date().getHours() +
            ":" +
            new Date().getMinutes() +
            (new Date().getHours() >= 12 ? " PM " : " AM ")}
        </p>

        <div className={styles.chatMessages}>
          <div>
            {sentMessages.map((m, index) => (
              <div key={index}>
                <div className={styles.sentMessage}>
                  <p>{m.message}</p>
                  <img src={avatar} className={styles.avatar} />
                </div>
                <br />
                <div className={styles.receivedMessage}>
                  <img src={user} className={styles.img} />
                  <p>{receivedMessages[index].message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <form
        className={styles.composeMessage}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <label htmlFor="attachment" type="button" className={styles.chatButton}>
          <input id="attachment" type="file" style={{ display: "none" }} />
          <FontAwesomeIcon icon={faPaperclip} className={styles.icon} />
        </label>
        <button
          type="button"
          className={styles.chatButton}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
        </button>
      </form>
    </div>
  );
}
