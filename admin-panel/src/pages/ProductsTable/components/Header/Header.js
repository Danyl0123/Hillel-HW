import React from "react";
import "./Header.css";
import ProductTableLogo from "../../../../assets/productTableLogo.svg";
import Button from "../../../../components/Button/Button";
import { FaPlus } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

function Header() {
  return (
    <div className="header__container">
      <img src={ProductTableLogo} alt="logo" />
      <div className="headder__buttons">
        <Button
          className="header__btn"
          text="Preview"
          IconComponent={VscAccount}
        />
        <Button
          className="header__btn"
          text="Add Product"
          IconComponent={FaPlus}
        />
      </div>
    </div>
  );
}
export default Header;
