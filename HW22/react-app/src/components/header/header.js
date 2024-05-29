import React from "react";
import "./header.css";
function Header() {
  return (
    <div className="container">
      <div className="header">
        <img
          className="header__img"
          src="https://picsum.photos/100/100"
          alt="picsom"
        />
        <h1 className="header__title">Lorem Picsum</h1>
      </div>
    </div>
  );
}
export default Header;
