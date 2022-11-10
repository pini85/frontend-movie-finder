import React from 'react';
import { StyleSelect, StyleOptionDisabled } from './SelectInput.styles';
const SelectInput = ({ title, name, handleOnChange, value, children }) => {
  return (
    <label htmlFor={name} style={{ width: '100%' }}>
      <StyleSelect
        width="100%"
        onChange={(e) => handleOnChange(e, 'selector')}
        value={value}
        name={name}
        id={name}
      >
        <StyleOptionDisabled>{title}</StyleOptionDisabled>
        {children}
      </StyleSelect>
    </label>
  );
};
export default SelectInput;
