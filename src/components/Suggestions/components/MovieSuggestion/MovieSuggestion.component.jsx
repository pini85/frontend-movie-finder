import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faStar } from '@fortawesome/free-solid-svg-icons';
import useWidth from 'hooks/useWidth.hooks';
import * as S from './movieSuggestion.styles.js';
const MovieSuggestion = ({ movie, handleClick }) => {
  const width = useWidth().width;
  return (

    <S.CardContainer onClick={() => handleClick(movie)} width={width}>

      <S.Img src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`} alt="" />
      <S.CardWrapper>
        <S.Title> {movie.title}</S.Title>
        <S.IconAndYearContainer>
          <FontAwesomeIcon icon={faFilm} />
          <S.DateWrapper>
            {movie.release_date ? movie.release_date.substr(0, 4) : null}
          </S.DateWrapper>
        </S.IconAndYearContainer>
        <S.VoteContainer>
          <FontAwesomeIcon color="orange" icon={faStar} />
          <S.VoteWrapper>{movie.vote_average}</S.VoteWrapper>
        </S.VoteContainer>
      </S.CardWrapper>
    </S.CardContainer>
  );
};
export default MovieSuggestion;
