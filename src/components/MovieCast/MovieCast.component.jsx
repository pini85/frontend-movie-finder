import React from 'react';
import Carousel from 'components/Carousel/carousel.component';
import MovieCastCarousel from 'components/MovieCastCarousel/MovieCastCarousel.component';
import useWidth from '../../hooks/useWidth.hooks';

const MovieCast = ({ cast, colors }) => {
  const width = useWidth().width;

  const styling = {
    padding: '0 4rem',
  };
  const responsive = () => {
    switch (true) {
      case width < 500:
        return 2;
      case width < 800:
        return 3;
      case width < 1500:
        return 5;
      default:
        return 6;
    }
  };

  const renderCast = () => {
    let elements;
    if (cast.length > 10) {
      elements = cast.slice(0, 10);
    } else {
      elements = cast;
    }

    return elements.map((cast, i) => {
      return (
        <MovieCastCarousel
          colors={colors}
          key={i}
          name={cast.name}
          profile={cast.profile_path}
          character={cast.character}
        />
      );
    });
  };
  return (
    <>
      <Carousel
        slidesToShow={responsive()}
        slidesToScroll={responsive()}
        autoPlay={false}
        fade={false}
        styling={styling}
        color={colors.darkVibrant}
        activeDotColor={colors.darkMuted}
        dotsColor={colors.lightMuted}
      >
        {renderCast()}
      </Carousel>
    </>
  );
};

export default MovieCast;
