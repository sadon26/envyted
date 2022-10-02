import React from 'react';

const Label = ({ htmlFor, children }) => {
  return (
    <label className="fs-13 fw-700 mb-2 color-grey-72 block" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
