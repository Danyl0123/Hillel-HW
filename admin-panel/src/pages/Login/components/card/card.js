import React, { useState } from "react";
import "./Card.css";
import Logo from "../../../../assets/loginLogo.svg";
import Input from "../../../../components/Input/Input";
import LoginBtn from "../../../../components/Button/Button";
import { IoEyeSharp } from "react-icons/io5";
import { GoEyeClosed } from "react-icons/go";
import { FaSpinner } from "react-icons/fa";

function Card() {
  const [isPassword, setIsPassword] = useState(true);
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState({ userName: false, password: false });
  const [authenticationError, setAuthenticationError] = useState(false);
  const [loading, setLoading] = useState(false);

  const btnHandleClick = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: loginValue,
        password: passwordValue,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("jwt-token", data.token);
      setAuthenticationError(false);
      setLoading(false);
    } else {
      setAuthenticationError(true);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name } = e.target;
    if (authenticationError) setAuthenticationError(false);

    setError((prev) => ({
      ...prev,
      [name]: e.target.value.trim() === "",
    }));
    if (e.target.value.trim().length === 0) {
    }
    if (name === "userName") {
      setLoginValue(e.target.value);
    }
    if (name === "password") {
      setPasswordValue(e.target.value);
    }
  };

  const handleClick = () => {
    setIsPassword((prev) => !prev);
  };
  const disabled =
    loginValue.trim().length === 0 || passwordValue.trim().length === 0;
  return (
    <div className="login__card">
      <img className="login__logo" src={Logo} alt="logo" />
      <div className="login__form">
        <div className="input-container">
          {loading && <FaSpinner className="spinner" />}
          <Input
            name="userName"
            type="text"
            placeholder="User name"
            className={`login__input ${error.userName ? "input-error" : ""}`}
            value={loginValue}
            onChange={handleChange}
          />
          {error.userName && (
            <p className="card__error">обов'язково до заповнення</p>
          )}
        </div>
        <div className="input-container">
          <Input
            name="password"
            type={isPassword ? "password" : "text"}
            placeholder="Password"
            className={`login__input ${error.password ? "input-error" : ""}`}
            IconComponent={isPassword ? IoEyeSharp : GoEyeClosed}
            classNameIcon="login__input-icon"
            onClick={handleClick}
            value={passwordValue}
            onChange={handleChange}
          />
          {error.password && (
            <p className="card__error">обов'язково до заповнення</p>
          )}
        </div>

        <LoginBtn
          disabled={disabled}
          className={`login__btn ${disabled ? "disabled-btn" : ""}`}
          text="Login"
          onClick={btnHandleClick}
        />
        <div className="error-block">
          {authenticationError && (
            <div className="card__error-block">
              Неправильний логін або пароль
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Card;
