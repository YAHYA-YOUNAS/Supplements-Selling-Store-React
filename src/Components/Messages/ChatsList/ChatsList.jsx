import React from "react";
import user from "../../../assets/user.png";
import styles from "./ChatsList.module.css";

export default function ChatsList() {
  const chats = [
    {
      image: user,
      name: "Graphic Designer",
      message: "The beginning of the mess...",
      time: "1 min",
    },
    {
      image: user,
      name: "Admin",
      message: "The beginning of the mess...",
      time: "1 min",
    },
    {
      image: user,
      name: "Customer Service",
      message: "The beginning of the mess...",
      time: "1 min",
    },
    {
      image: user,
      name: "Merchant",
      message: "The beginning of the mess...",
      time: "1 min",
    },
  ];

  return (
    <div className={styles.chatList}>
      <h3>Chat</h3>
      <div>
        {chats.length > 0
          ? chats.map((chat, index) => (
              <div key={index} className={styles.chatInfo}>
                <img src={chat.image} />
                <span className={styles.status}>●</span>
                <div>
                  <span>{chat.name}</span>
                  <br />
                  <span>{chat.message}</span>
                  <span>{chat.time}</span>
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
