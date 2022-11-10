import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import * as S from './ListAnimation.styles';
const ListAnimation = ({ children, title }) => {
  const [isShow, setShow] = useState(false);
  return (
    <>
      <S.OptionTitle onClick={() => setShow((value) => !value)}>{title}</S.OptionTitle>
      <AnimatePresence>
        {isShow && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ overflow: 'hidden' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default ListAnimation;
