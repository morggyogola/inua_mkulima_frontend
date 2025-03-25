import React from 'react';

export const Button = ({ type, className, children }) => (
  <button type={type} className={`bg-blue-500 text-white py-2 px-4 rounded ${className}`}>
    {children}
  </button>
);