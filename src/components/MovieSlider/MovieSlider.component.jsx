import { useNavigate } from 'react-router-dom';
import MovieSliderInfo from './components/MovieSliderInfo/MovieSliderInfo.component';
import * as S from './MovieSlider.styles';

const MovieSlider = ({ movie, movies, currentIndex }) => {
  const navigate = useNavigate();
  const goToMovie = () => {
    const movieId = movies[currentIndex].id;
    navigate(`/movie/${movieId}`);
  };
  return (
    <S.Container img={movie.backdrop_path}>
      <MovieSliderInfo movie={movie} goToMovie={goToMovie}></MovieSliderInfo>
    </S.Container>
  );
};

export default MovieSlider;
