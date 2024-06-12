import React from "react";
import "./Input.css";

function Input({
  name,
  type,
  placeholder,
  IconComponent,
  className,
  classNameIcon,
  onClick,
  onChange,
  errorMessage,
}) {
  return (
    <label>
      {IconComponent && (
        <IconComponent className={classNameIcon} onClick={onClick} />
      )}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
      {errorMessage}
    </label>
  );
}
export default Input;
