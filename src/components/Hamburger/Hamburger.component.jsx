import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';
import { Container, HandleBars } from './Hamurger.styles';
import Navigation from 'components/Navigation/Navigation.component';

const Hamburger = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const location = useLocation();
  const handleClick = (e) => {
    // e.stopPropagation();
    setToggleHamburger((value) => !value);
  };

  useEffect(() => {
    setToggleHamburger(false);
  }, [location]);

  return (
    <Container onClick={(e) => handleClick(e)}>
      <HandleBars isOpen={toggleHamburger}></HandleBars>
      <AnimatePresence>
        {toggleHamburger && (
          <motion.div
            style={{ zIndex: '999' }}
            initial={{ transform: 'translateX(-400px)' }}
            animate={{ transform: 'translateX(0px)' }}
            exit={{ transform: 'translateX(-400px)' }}
            transition={{ duration: 0.8 }}
          >
            <Navigation setOpen={setToggleHamburger}></Navigation>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Hamburger;
