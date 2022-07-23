import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faCaretDown,
  faCircle,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import avatar from "../../../assets/avatar.png";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Alert from "../Alert/Alert";

function NavBar(props) {
  const { clicked, setClicked, openMenu, setOpenMenu } = props;
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      title: "Custom Designs",
      description:
        "Mijat Stevovic uploaded you some LOGO Designs. Check them out!",
      time: "10:30AM",
      markAsRead: false,
    },
    {
      title: "Custom Designs",
      description:
        "Mijat Stevovic uploaded you some LOGO Designs. Check them out!",
      time: "10:30AM",
      markAsRead: false,
    },
    {
      title: "Custom Designs",
      description:
        "Mijat Stevovic uploaded you some LOGO Designs. Check them out!",
      time: "10:30AM",
      markAsRead: true,
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.responsiveIcon}>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.navIcon}
          onClick={() => setOpenMenu(!openMenu)}
        />
      </div>

      <div className={styles.notiMessages}>
        <div
          style={{ marginRight: "30px", cursor: "pointer" }}
          onMouseEnter={() => setShowNotifications(true)}
          onMouseLeave={() => setShowNotifications(false)}
        >
          <span className={styles.heading}>Notifications</span>
          <FontAwesomeIcon icon={faBell} style={{ paddingLeft: "8px" }} />
          <span className={styles.notiCount}>
            <Alert count={2} />
          </span>
        </div>

        <Link to="messages" style={{ marginRight: "20px", color: "gray" }}>
          <span className={styles.heading}>Messages</span>
          <FontAwesomeIcon
            icon={faMessage}
            style={{ paddingLeft: "8px", color: "gray" }}
          />
          <span className={styles.messageCount}>
            <Alert count={4} />
          </span>
        </Link>
      </div>

      {showNotifications && (
        <div
          className={styles.notiBox}
          onMouseEnter={() => setShowNotifications(true)}
        >
          <h4 style={{ paddingLeft: "5px" }}>All notifications</h4>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <div key={index} className={styles.notification}>
                <span className={styles.notiTitle}>{notification.title}</span>
                <span className={styles.description}>
                  {notification.description}
                  {!notification.markAsRead ? (
                    <FontAwesomeIcon
                      icon={faCircle}
                      color="#52d017"
                      style={{ float: "right", marginTop: "5px" }}
                    />
                  ) : (
                    ""
                  )}
                </span>
                <span className={styles.time}>{notification.time}</span>
              </div>
            ))
          ) : (
            <p style={{ color: "#BBC4CE", textAlign: "center" }}>
              No notifcations yet!
            </p>
          )}
        </div>
      )}

      <div className={styles.profile} onClick={() => setClicked(!clicked)}>
        <img src={avatar} className={styles.userAvatar} />
        <span>Hello, Martin!</span>
        <FontAwesomeIcon
          icon={faCaretDown}
          style={{ marginLeft: "8px", color: "grey" }}
        />
      </div>
      {clicked && (
        <div className={styles.logout}>
          <Link to="logout" className={styles.logoutLink}>
            Log out{" "}
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
