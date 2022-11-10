import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { displayTheme, displaySpinner } from '../../redux/actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  OptionsContainer,
  OptionContainer,
  IconContainer,
  ButtonContainer,
  OptionTitle,
} from './Customize.styles';
import { motion, AnimatePresence } from 'framer-motion';
import CategoryTitle from 'components/CategoryTitle/CategoryTitle.component';
import Modal from 'components/Modal/Modal.component';
import CustomizeOption from 'components/CustomizeOption/CustomizeOption.component';
import Button from 'components/Button/Button';

const Customize = ({ displayTheme, theme, displaySpinner, spinner }) => {
  const navigate = useNavigate();
  const [isToggled, setToggled] = useState(false);
  const [option, setOption] = useState(null);
  const [isSpinners, setSpinners] = useState(null);
  const [isThemes, setThemes] = useState(null);

  const handleClick = () => {
    navigate('/settings');
  };

  return (
    <IconContainer onClick={handleClick}>
      <FontAwesomeIcon icon={faCog} />
    </IconContainer>
  );
};
const mapStateToProps = (state) => ({
  theme: state.displayTheme,
  spinner: state.displaySpinner,
});
export default Customize;
