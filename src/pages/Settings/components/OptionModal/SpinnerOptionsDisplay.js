import React from 'react';
import * as S from './OptionModal.styles';
import BouncingDvd from 'components/Spinners/BouncingDvd/BouncingDvd.component';
import Film from 'components/Spinners/Film/Film.component';
import Spin from 'components/Spinners/Spin/Spin.component';
import useWidth from 'hooks/useWidth.hooks';
const SpinnerOptionsDisplay = ({ option }) => {
  const width = useWidth().width;
  const isMobile = width < 600;

  const showOption = () => {
    switch (option) {
      case 'bouncing dvd':
        return <BouncingDvd></BouncingDvd>;
      case 'camera':
        return <Film></Film>;
      case 'spin':
        return <Spin></Spin>;
    }
  };
  return (
    <S.DisplayContainer dvd={option === 'bouncing dvd'} isMobile={isMobile}>
      <>{showOption()}</>
    </S.DisplayContainer>
  );
};
export default SpinnerOptionsDisplay;
