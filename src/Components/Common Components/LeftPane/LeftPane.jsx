import React from "react";
import styles from "./LeftPane.module.css";
import logo from "../../../assets/logo.PNG";
import { NavLink, useMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlenderPhone,
  faBoxArchive,
  faBullhorn,
  faChartSimple,
  faCircleQuestion,
  faFile,
  faGlobe,
  faHouseChimney,
  faPaintbrush,
  faSliders,
  faStore,
  faVideoCamera,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function LeftPane({ classes, setOpenMenu }) {
  const navStyle = {
    padding: "15px",
  };
  const { pathname } = useMatch("/*");
  return (
    <div
      className={
        classes === "responsiveLeftPane"
          ? styles.responsiveLeftPane
          : styles.leftPane
      }
    >
      <div className={styles.logo}>
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.cross}
          onClick={() => setOpenMenu(false)}
        />
        <div>
          <img src={logo} alt="" style={{ width: "200px" }} />
        </div>
      </div>
      <div>
        <h3 className={styles.heading}>Customer</h3>
        <hr />
      </div>
      <div>
        <nav className={styles.leftNav}>
          <NavLink
            to="home"
            style={navStyle}
            className={({ isActive }) =>
              isActive || pathname === "/" || pathname === "/messages"
                ? styles.active
                : styles.navLink
            }
            onClick={() => setOpenMenu(false)}
          >
            <FontAwesomeIcon
              icon={faHouseChimney}
              style={{ margin: "0 5px 0 5px" }}
            />
            Home
          </NavLink>

          <NavLink
            to="domain"
            style={navStyle}
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
            onClick={() => setOpenMenu(false)}
          >
            <FontAwesomeIcon icon={faGlobe} style={{ margin: "0 5px 0 5px" }} />
            Domain
          </NavLink>

          <NavLink
            to="businessSettings"
            style={navStyle}
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
            onClick={() => setOpenMenu(false)}
          >
            <FontAwesomeIcon
              icon={faSliders}
              style={{ margin: "0 5px 0 5px" }}
            />
            Business Settings
          </NavLink>

          <NavLink
            to="catalog"
            style={navStyle}
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
            onClick={() => setOpenMenu(false)}
          >
            <FontAwesomeIcon icon={faFile} style={{ margin: "0 5px 0 5px" }} />
            Catalog
          </NavLink>

          <NavLink
            to="designStudio"
            style={navStyle}
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
            onClick={() => setOpenMenu(false)}
          >
            <FontAwesomeIcon
              icon={faPaintbrush}
              style={{ margin: "0 5px 0 5px" }}
            />
            Design Studio
          </NavLink>

          <NavLink
            to="myStores"
            style={navStyle}
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
            onClick={() => setOpenMenu(false)}
          >
            <FontAwesomeIcon icon={faStore} style={{ margin: "0 5px 0 5px" }} />
            My Stores
          </NavLink>

          <NavLink
            to="merchant"
            style={navStyle}
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
            onClick={() => setOpenMenu(false)}
          >
            <FontAwesomeIcon
              icon={faBoxArchive}
              style={{ margin: "0 5px 0 5px" }}
            />
            Merchant
          </NavLink>

          <NavLink
            to="voip"
            style={navStyle}
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
            onClick={() => setOpenMenu(false)}
          >
            <FontAwesomeIcon
              icon={faBlenderPhone}
              style={{ margin: "0 5px 0 5px" }}
            />
            My VoIP
          </NavLink>

          <NavLink
            to="analytics"
            style={navStyle}
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
            onClick={() => setOpenMenu(false)}
          >
            <FontAwesomeIcon
              icon={faChartSimple}
              style={{ margin: "0 5px 0 5px" }}
            />
            Analytics
          </NavLink>

          <NavLink
            to="goLive"
            style={navStyle}
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
            onClick={() => setOpenMenu(false)}
          >
            <FontAwesomeIcon
              icon={faVideoCamera}
              style={{ margin: "0 5px 0 5px" }}
            />
            GO Live!
          </NavLink>
        </nav>
      </div>
      <div>
        <h3 className={styles.heading}>Other</h3>
        <hr />
      </div>
      <div>
        <nav className={styles.leftNav}>
          <NavLink
            to="helpAndSupport"
            style={navStyle}
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
            onClick={() => setOpenMenu(false)}
          >
            <FontAwesomeIcon
              icon={faCircleQuestion}
              style={{ margin: "0 5px 0 5px" }}
            />
            Help & Support
          </NavLink>

          <NavLink
            to="profile"
            style={navStyle}
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
            onClick={() => setOpenMenu(false)}
          >
            <FontAwesomeIcon
              icon={faSliders}
              style={{ margin: "0 5px 0 5px" }}
            />
            My Profile/Settings
          </NavLink>

          <NavLink
            to="logout"
            style={navStyle}
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
            onClick={() => setOpenMenu(false)}
          >
            <FontAwesomeIcon
              icon={faBullhorn}
              style={{ margin: "0 5px 0 5px" }}
            />
            Log out
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default LeftPane;
