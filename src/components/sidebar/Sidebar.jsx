import React, { useState } from "react";
import "./Sidebar.css";

function SideNav(props) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(props);

  function toggleNav() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className={`side-nav ${isOpen ? "open" : ""}`} onClick={toggleNav}>
        <div className="top-head">
          <p>Journey Board</p>
        </div>

        <div className="mid-body">
          <ul>
            <li><h4>{props.content.task_title}</h4></li>

            {props.content.assets.map((itm) => (
              <li>{itm.asset_title}</li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default SideNav;
