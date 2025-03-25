import React from 'react';

export const Input = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="border rounded px-3 py-2 w-full"
  />
);