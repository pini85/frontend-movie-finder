import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/slices/ui.slice.js';

import { Container } from './LightSwitch.styles';

const LightSwitch = () => {
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);
  const handleClick = () => {
    setToggle((value) => !value);
    if (theme !== 'dark-theme') {
      dispatch(setTheme('dark-theme'));
    } else {
      dispatch(setTheme('default-theme'));
    }
  };
  return (
    <Container
      toggle={toggle}
      style={{ color: 'white' }}
      onClick={handleClick}
    ></Container>
  );
};

export default LightSwitch;
