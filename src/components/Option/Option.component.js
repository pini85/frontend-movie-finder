import React from 'react';

import * as S from './Option.styles';

const Option = ({ handleOnClick, index, isActive, title }) => {
  return (
    <S.Container isActive={isActive} onClick={() => handleOnClick(index)}>
      {title}
    </S.Container>
  );
};

export default Option;
