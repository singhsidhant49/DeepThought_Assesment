import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faHouseChimney,
  faScrewdriverWrench,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return ( 
    <div className="navcontainer">
      <div className="left">
        <img
          className="logo-img"
          src="https://deepthought.education/assets/images/logo/logo.svg"
          alt="logo"
        />
      </div>
      <div className="right">
        <div className="icon">
          {" "}
          <FontAwesomeIcon icon={faScrewdriverWrench} className="icon-item" />
        </div>
        <div className="icon">
          {" "}
          <FontAwesomeIcon icon={faHouseChimney} className="icon-item" />
        </div>
        <div className="icon">
          {" "}
          <FontAwesomeIcon icon={faBell} className="icon-item" />
        </div>
        <div className="icon">
          <img
            className="user-pic"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            alt="logo"
          />
        </div>

        <div className="dot-icon">
          {" "}
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className="dot-icon-item"
          />
        </div>

        <div className="profile"></div>
      </div>
    </div>
  );
};

export default Navbar;
