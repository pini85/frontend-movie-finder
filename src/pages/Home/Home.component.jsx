import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { tmdbMovieSliderApi } from '../../apis/tmdbApi';
import { highestRated, latestMovies } from 'utlis/apiTabObjects';

import Carousel from 'components/Carousel/carousel.component';
import Footer from 'layouts/Footer/Footer.component';
import Options from 'components/Options/Options.component';
import DisplayMovieList from 'components/DisplayMovieList/DisplayMovieList.jsx';
import MovieSlider from 'components/MovieSlider/MovieSlider.component';

import * as S from './Home.styles';

const Home = () => {
  const [optionIndex, setOptionIndex] = useState(0);
  const homeOptions = [
    latestMovies,
    highestRated,

    // { title: 'just for you', api: null },
  ];
  const tag = homeOptions[optionIndex].title;
  const apiCall = homeOptions[optionIndex].api;

  const { data } = useQuery(tag, () => apiCall(1), {
    keepPreviousData: true,
  });
  console.log({ data });
  const { data: movies } = useQuery('movie-slider', tmdbMovieSliderApi);

  const renderMovieSliders = () => {
    return movies.map((movie) => {
      return <MovieSlider key={movie.id} movie={movie} movies={movies}></MovieSlider>;
    });
  };

  return (
    <S.Container>
      {movies && (
        <S.CarouselContainer>
          <Carousel
            type="movieSlider"
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            fade={true}
            color="var(--primary-color)"
            activeDotColor="var(--primary-color)"
            dotsColor="white"
          >
            {renderMovieSliders()}
          </Carousel>
        </S.CarouselContainer>
      )}
      <S.Header>Welcome to Movie Finder</S.Header>
      <S.Paragraph>Discover and watch</S.Paragraph>
      <Options
        setOption={setOptionIndex}
        options={homeOptions}
        activeIndex={optionIndex}
      />
      {data && <DisplayMovieList data={data.results} />};
      <Footer />
    </S.Container>
  );
};

export default Home;
