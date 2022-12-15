import React from 'react';
import { useSelector } from 'react-redux';
import BouncingDvd from 'components/Spinners/BouncingDvd/BouncingDvd.component';
import Film from 'components/Spinners/Film/Film.component';
import Spin from 'components/Spinners/Spin/Spin.component';
import useWidth from '../../hooks/useWidth.hooks';
import { Container } from './LoadingScreen.styles';
const LoadingScreen = () => {
  const spinner = useSelector((state) => state.ui.spinner);
  const width = useWidth().width;
  const isMobile = width < 600;

  const showOption = () => {
    switch (spinner) {
      case 'bouncing dvd':
        return <BouncingDvd></BouncingDvd>;
      case 'camera':
        return <Film></Film>;
      case 'spin':
        return <Spin></Spin>;
      default:
        console.log('error', spinner);
    }
  };
  return (
    <Container isMobile={isMobile} dvd={spinner === 'bouncing dvd'}>
      {showOption()}
    </Container>
  );
};

export default LoadingScreen;
