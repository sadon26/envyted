import React from 'react';

const PageLayout = ({ children, className = '' }) => {
  return (
    <div className={`background-light-purple w-full min-h-screen lg:py-24 md:py-14 lg:px-40 md:px-56 sm:p-12 ${className}`}>
      {children}
    </div>
  );
};

export default PageLayout;
