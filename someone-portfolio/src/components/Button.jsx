import React from 'react'

const Button = ({label, classes}) => {
  return (
    <button className={`${classes}`}>
      {label}
    </button>
  );
};

export default Button;