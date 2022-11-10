import React from 'react';

import Option from 'components/Option/Option.component';
import * as S from './Options.styles';

const Options = ({ setOption, options, activeIndex }) => {
  const renderOptions = () => {
    return options.map((option, index) => {
      return (
        <Option
          key={option.title}
          isActive={activeIndex === index}
          title={option.title}
          index={index}
          handleOnClick={setOption}
        />
      );
    });
  };

  return <S.OptionsContainer>{renderOptions()}</S.OptionsContainer>;
};

export default Options;
