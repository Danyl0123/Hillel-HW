import React from "react";
import "./Header.css";
import ProductTableLogo from "../../../../assets/productTableLogo.svg";
import Button from "../../../../components/Button/Button";
import { FaPlus } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header__container">
      <img src={ProductTableLogo} alt="logo" />
      <div className="headder__buttons">
        <Button
          className="header__btn"
          text="Preview"
          IconComponent={VscAccount}
          onClick={() => navigate(`/products-preview`)}
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
