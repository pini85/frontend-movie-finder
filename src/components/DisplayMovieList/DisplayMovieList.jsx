import useSavedMovies from 'hooks/reactQuery/useSavedMovies.hooks';
import { useSelector } from 'react-redux';
import * as S from './displayMovieList.styles';
import Card from 'components/Card/Card';

const DisplayMovieList = ({ data }) => {
  console.log({ data });
  const userId = useSelector((state) => state.user?.user?._id);
  const { savedMovies } = useSavedMovies(userId);

  const findSavedMovies = (movieId) => {
    return !!savedMovies?.movies.find((movie) => {
      return movie.id === movieId;
    });
  };

  const renderCards = () => {
    return data.map((movie) => {
      const isSaved = findSavedMovies(movie.id);

      if (movie === null) return;
      return <Card key={movie.id} movie={movie} isSaved={isSaved}></Card>;
    });
  };

  return <S.Container>{renderCards()}</S.Container>;
};

export default DisplayMovieList;
