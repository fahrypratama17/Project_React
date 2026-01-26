import React from "react";

const Button = ({ label, primary }) => {
  return (
    <button
      className={`shadow-util rounded-full px-6 py-2.5 font-medium transition-all hover:bg-neutral-100 focus:bg-neutral-100 ${
        primary
          ? "bg-lime-200 hover:bg-lime-400 focus:bg-lime-400"
          : "hover:bg-neutral-100 focus:bg-neutral-100"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
