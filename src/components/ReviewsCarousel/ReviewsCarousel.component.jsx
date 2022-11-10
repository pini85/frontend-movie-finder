import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as S from './ReviewsCarousel.styles';

const ReviewsCarousel = ({ author, content, color }) => {
  const [exposedText, setExposedText] = useState(null);
  const [hiddenText, setHiddenText] = useState(null);
  const [isHidden, setHidden] = useState(true);
  useEffect(() => {
    if (author === 'msbreviews') {
      setExposedText(content.slice(97, 497));
      setHiddenText(content.slice(498));
    }
    setExposedText(content.slice(0, 410));
    setHiddenText(content.slice(411));
  }, []);
  const handleClick = () => {
    setHidden((val) => !val);
  };

  return (
    <S.Container color={color.vibrant}>
      <div>
        <i>By: {author} </i>
      </div>
      <S.ContentContainer>
        {exposedText}
        <AnimatePresence>
          {!isHidden && (
            <motion.span
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              exit={{ height: 0 }}
              transition={{ duration: 0 }}
            >
              {' ' + hiddenText}
            </motion.span>
          )}
        </AnimatePresence>
        {hiddenText && (
          <span onClick={handleClick}>
            {isHidden ? (
              <S.TextContainer color={color.darkVibrant}>
                {' '}
                ...Show more
              </S.TextContainer>
            ) : (
              <S.TextContainer color={color.darkVibrant}> Collapse</S.TextContainer>
            )}
          </span>
        )}
      </S.ContentContainer>
      <div></div>
    </S.Container>
  );
};

export default ReviewsCarousel;
