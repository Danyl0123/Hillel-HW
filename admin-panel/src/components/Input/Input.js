import React from "react";
import "./Input.css";

function Input({ type, placeholder, IconComponent, className, classNameIcon }) {
  return (
    <label>
      {IconComponent && <IconComponent className={classNameIcon} />}
      <input type={type} placeholder={placeholder} className={className} />
    </label>
  );
}
export default Input;
