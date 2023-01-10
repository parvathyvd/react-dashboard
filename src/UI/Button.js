import React from "react";
import "./button.css";

const Button = ({ type, children }) => {
  return (
    <button className={`btn ${type}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
