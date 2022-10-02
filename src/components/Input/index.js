import React from 'react';
import Label from './Label';
import './_input.scss';

const Input = ({ placeholder = 'Enter details', type = 'text', onChange, value, id, label, name }) => {
  return (
    <div className="input">
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="input__box-container">
        <input
          className="input__box"
          type={type}
          id={id}
          placeholder={placeholder}
          value={value ?? ''}
          onChange={onChange}
          name={name}
        />
      </div>
    </div>
  );
};

export default Input;
