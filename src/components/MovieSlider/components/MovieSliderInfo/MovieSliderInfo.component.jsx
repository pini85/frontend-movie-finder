import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button/Button';

import * as S from './MovieSliderInfo.styles';

const MovieSliderInfo = ({ movie, goToMovie }) => {
  const plotDetails = (plot) => {
    if (plot.length > 200) {
      return plot.slice(0, 200) + '...';
    }
    return plot;
  };

  return (
    <S.Container>
      <S.Header>{movie.title}</S.Header>
      <S.Plot>{plotDetails(movie.overview)}</S.Plot>
      <S.DetailContainer>
        <Button title="Details" handleClick={goToMovie} />
        <S.LeftDetails>
          <S.ReleaseDateWrapper>
            {movie.release_date.slice(0, 4)}
          </S.ReleaseDateWrapper>
        </S.LeftDetails>
        <S.RightDetails>
          <FontAwesomeIcon icon={faStar} />
          <S.VoteAverage>{movie.vote_average}</S.VoteAverage>
        </S.RightDetails>
      </S.DetailContainer>
    </S.Container>
  );
};

export default MovieSliderInfo;
