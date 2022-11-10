import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, HandleBars } from './Hamurger.styles';
import { toggleHamburger } from '../../redux/actions/index';
import Navigation from 'components/Navigation/Navigation.component';
import useDidUpdateEffect from 'hooks/useDidUpdateEffect.hooks';
const Hamburger = ({ setToggleHamburger, toggleHamburger }) => {
  const location = useLocation();
  const handleClick = (e) => {
    //prevent bubbling up to the app on click
    e.stopPropagation();
    setToggleHamburger();
  };

  // useDidUpdateEffect(() => {
  //   setToggleHamburger();
  // }, [location]);

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
const mapStateToProps = (state) => ({
  toggleHamburger: state.toggleHamburger,
});
export default connect(mapStateToProps, {
  setToggleHamburger: toggleHamburger,
})(Hamburger);
