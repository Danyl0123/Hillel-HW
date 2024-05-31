import React from "react";
import "./loginInput.css";

function Input(props) {
  return (
    <input
      className="login__input"
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}
export default Input;
