import React, { useState } from 'react';
import { useAdvancedForm } from 'pages/AdvancedSearch/context/advancedSearchFormContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Container,
  TitleContainer,
  OptionsContainer,
  OptionContainer,
} from './CastOptions.styles';
const CastOptions = ({ name, setShowInput, showInput }) => {
  const [isToggled, setToggled] = useState(false);
  const [isActive, setActive] = useState(false);

  const { inputData, setInputData } = useAdvancedForm();

  const handleClick = () => {
    setToggled((prevValue) => !prevValue);
    setActive((prevValue) => !prevValue);
  };
  const handleOptionClick = (e) => {
    setShowInput(true);
    setToggled((prevValue) => !prevValue);
    setActive((prevValue) => !prevValue);

    setInputData({
      ...inputData,
      [name]: { ...inputData[name], type: e.target.getAttribute('data-tag') },
    });
  };
  return (
    <>
      {!showInput && (
        <Container>
          <TitleContainer isActive={isActive}>
            <h4 onClick={handleClick}>Add {name}</h4>
          </TitleContainer>

          <AnimatePresence>
            {isToggled && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 1 }}
                style={{ overflow: 'hidden' }}
              >
                <OptionsContainer>
                  <div>Do you want {name} in</div>
                  <OptionContainer data-tag="or" onClick={(e) => handleOptionClick(e)}>
                    In different movies
                  </OptionContainer>
                  <div>- OR -</div>
                  <OptionContainer data-tag="and" onClick={(e) => handleOptionClick(e)}>
                    In the same movie
                  </OptionContainer>
                </OptionsContainer>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      )}
    </>
  );
};
export default CastOptions;
