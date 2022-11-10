import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReviewsCarousel from 'components/ReviewsCarousel/ReviewsCarousel.component';

import Carousel from 'components/Carousel/carousel.component';
import * as S from './Reviews.styles';

const Reviews = ({ colors, reviews }) => {
  const renderReviews = () => {
    return reviews.results.map((review, i) => {
      return (
        <ReviewsCarousel
          key={i}
          author={review.author}
          content={review.content}
          color={colors}
        />
      );
    });
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ width: '100%' }}
        animate={{ width: '100%' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <S.Container borderColor={colors.vibrant} fontColor={colors.darkMuted}>
          <Carousel
            type="reviews"
            color={colors.vibrant}
            slidesToShow={1}
            slidesToScroll={1}
            fade={true}
          >
            {renderReviews()}
          </Carousel>
        </S.Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default Reviews;
