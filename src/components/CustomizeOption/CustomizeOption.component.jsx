import React from 'react';
import { Container } from './CustomizeOption.styles';
import { AnimatePresence, motion } from 'framer-motion';
import BouncingDvd from 'components/Spinners/BouncingDvd/BouncingDvd.component';
import Film from 'components/Spinners/Film/Film.component';
import Spin from 'components/Spinners/Spin/Spin.component';
import useWidth from 'hooks/useWidth.hooks';
const CustomizeOption = ({ option }) => {
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
    <Container dvd={option === 'bouncing dvd'} isMobile={isMobile}>
      {showOption()}
    </Container>
  );
};
export default CustomizeOption;
