import React from "react";
import "./Input.css";

function Input({
  type,
  placeholder,
  IconComponent,
  className,
  classNameIcon,
  onClick,
}) {
  return (
    <label>
      {IconComponent && (
        <IconComponent className={classNameIcon} onClick={onClick} />
      )}
      <input type={type} placeholder={placeholder} className={className} />
    </label>
  );
}
export default Input;
