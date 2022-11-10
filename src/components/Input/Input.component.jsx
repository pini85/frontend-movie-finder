import React, { forwardRef } from 'react';

import * as S from './Input.styles';

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name, handleOnChange, value } = props;

  return (
    <label htmlFor={name}>
      <S.Input
        value={value}
        ref={ref}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={(e) => handleOnChange(e, 'input')}
        width={props.width}
      />
    </label>
  );
});
export default Input;
