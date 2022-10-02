import React from 'react';
import './_button.scss';

const Button = ({ type = 'button', theme = 'one', onClick, className, children, selectorActive = false }) => {
  return (
    <>
      <button className={`button button--${theme} ${className ?? ''}`} type={type} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
