import React from "react";
import Chat from "./Chat/Chat";
import ChatsList from "./ChatsList/ChatsList";
import styles from "./Messages.module.css";

function Messages() {
  return (
    <div className={styles.main}>
      <h3 className={styles.heading}>MESSAGES</h3>
      <div className={styles.messaging}>
        <ChatsList />
        <Chat />
      </div>
    </div>
  );
}

export default Messages;
