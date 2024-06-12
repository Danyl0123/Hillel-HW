import React from "react";
import "./Button.css";

function LoginBtn({ className, text, IconComponent, onClick, disabled }) {
  return (
    <button disabled={disabled} onClick={onClick} className={className}>
      {IconComponent && <IconComponent />}
      {text}
    </button>
  );
}
export default LoginBtn;
