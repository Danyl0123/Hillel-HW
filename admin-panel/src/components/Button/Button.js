import React from "react";
import "./Button.css";

function LoginBtn({ className, text, IconComponent }) {
  return (
    <button className={className}>
      {IconComponent && <IconComponent />}
      {text}
    </button>
  );
}
export default LoginBtn;
