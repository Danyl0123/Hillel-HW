import React from "react";
import "./sidebar.css";

function SideBar() {
  return (
    <div className="sidebar__list">
      <a className="sidebar__link" href="#home">
        Home
      </a>

      <a className="sidebar__link" href="#lorem1">
        Lorem 1
      </a>

      <a className="sidebar__link" href="#lorem2">
        Lorem 2
      </a>

      <a className="sidebar__link" href="#lorem3">
        Lorem 3
      </a>
    </div>
  );
}
export default SideBar;
