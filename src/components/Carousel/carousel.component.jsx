import React, { useState } from 'react';
import { TrailerContainer } from './Carousel.styles';
import YouTube from 'react-youtube';
import './carousel.styles.css';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import MovieCastCarousel from '../MovieCastCarousel/MovieCastCarousel.component';
import ReviewsCarousel from '../ReviewsCarousel/ReviewsCarousel.component';
import { CarouselStyling } from './Carousel.styles';
import useWidth from '../../hooks/useWidth.hooks';
const Carousel = ({
  slidesToShow,
  type,
  slidesToScroll,
  autoplay,
  fade,
  color,
  activeDotColor,
  dotColor,
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    autoplaySpeed: 3000,
    fade: fade,
    pauseOnHover: true,
    lazyLoad: true,
    adaptiveHeight: true,
    afterChange: (current) => type === 'movieSlider' && setCurrentIndex(current),
  };

  return (
    <>
      <CarouselStyling color={color} activeDotColor={activeDotColor} dotColor={dotColor}>
        <Slider {...settings}>
          {children &&
            children.map((child) => React.cloneElement(child, { currentIndex }))}
        </Slider>
      </CarouselStyling>
    </>
  );
};

export default Carousel;
