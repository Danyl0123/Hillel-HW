import React from "react";
import "./Card.css";
import Logo from "../../../../assets/loginLogo.svg";
import Input from "../../../../components/Input/Input";
import LoginBtn from "../../../../components/Button/Button";
import { IoEyeSharp } from "react-icons/io5";

function Card() {
  return (
    <div className="login__card">
      <img className="login__logo" src={Logo} alt="logo" />
      <div className="login__form">
        <Input type="text" placeholder="User name" className="login__input" />
        <Input
          type="password"
          placeholder="Password"
          className="login__input"
          IconComponent={IoEyeSharp}
          classNameIcon="login__input-icon"
        />
        <LoginBtn className="login__btn" text="Login" />
      </div>
    </div>
  );
}
export default Card;
