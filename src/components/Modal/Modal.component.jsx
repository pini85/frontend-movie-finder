import React from 'react';
import { compose } from 'redux';
import { AnimatePresence, motion } from 'framer-motion';
import CategoryTitle from 'components/CategoryTitle/CategoryTitle.component';

import * as S from './Modal.styles';
const Modal = ({
  isToggled,
  setToggled,
  setSpinners,
  setThemes,
  isTheme,
  setOption,
  skew,
  children,
  title,
  theme,
  dvd,
  ...props
}) => {
  const handleClick = () => {
    setToggled(false);
    document.body.style.overflow = 'auto';
    if (setSpinners || setThemes) {
      setSpinners(false);
      setThemes(false);
      setOption(null);
    }
  };

  // return ReactDOM.createPortal(
  return (
    <AnimatePresence>
      {isToggled && (
        // <div id="app" className={theme}>
        <S.MainContainer onClick={handleClick}>
          <S.Container dvd={dvd} onClick={(e) => e.stopPropagation()}>
            <motion.div
              initial={{ opacity: 0, width: '100%' }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              duration={1}
            >
              <CategoryTitle title={title}></CategoryTitle>

              <motion.div initial={{ y: 0 }} animate={{ y: 0 }} exit={{ y: 30 }}>
                <S.ButtonContainer
                // style={
                //   !skew ? { position: 'absolute', right: '-78px', top: '-29px' } : null
                // }
                >
                  <S.Button onClick={handleClick}>
                    <div> &#215;</div>
                  </S.Button>
                </S.ButtonContainer>

                {children}
              </motion.div>
            </motion.div>
          </S.Container>
        </S.MainContainer>
        // </div>
      )}
    </AnimatePresence>
  );
  //   document.querySelector("#modal")
  // );
};

export default Modal;
