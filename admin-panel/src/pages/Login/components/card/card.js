import React, { useState } from "react";
import "./Card.css";
import Logo from "../../../../assets/loginLogo.svg";
import Input from "../../../../components/Input/Input";
import LoginBtn from "../../../../components/Button/Button";
import { IoEyeSharp } from "react-icons/io5";
import { GoEyeClosed } from "react-icons/go";

function Card() {
  const [isPassword, setIsPassword] = useState(true);

  const handleClick = () => {
    setIsPassword((prev) => !prev);
  };
  return (
    <div className="login__card">
      <img className="login__logo" src={Logo} alt="logo" />
      <div className="login__form">
        <Input type="text" placeholder="User name" className="login__input" />
        <Input
          type={isPassword ? "password" : "text"}
          placeholder="Password"
          className="login__input"
          IconComponent={isPassword ? IoEyeSharp : GoEyeClosed}
          classNameIcon="login__input-icon"
          onClick={handleClick}
        />
        <LoginBtn className="login__btn" text="Login" />
      </div>
    </div>
  );
}
export default Card;
