import React from "react";
import "./Card.css";
import Logo from "../../../../assets/loginLogo.svg";
import Input from "../../../../components/Input/Input";
import LoginBtn from "../../../../components/Button/Button";

function Card() {
  return (
    <div className="login__card">
      <img className="login__logo" src={Logo} alt="logo" />
      <div className="login__form">
        <Input type="text" placeholder="User name" />
        <Input type="password" placeholder="Password" />
        <LoginBtn />
      </div>
    </div>
  );
}
export default Card;
