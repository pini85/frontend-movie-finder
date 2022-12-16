import { useSelector } from 'react-redux';
import DisplayMovieList from 'components/DisplayMovieList/DisplayMovieList.jsx';
import CategoryTitle from 'components/CategoryTitle/CategoryTitle.component';
import * as S from './SavedMovies.styles';
import useSavedMovies from 'hooks/reactQuery/useSavedMovies.hooks';

const SavedMovies = () => {
  const userId = useSelector((state) => state.user?.user._id);

  const { savedMovies } = useSavedMovies(userId);

  if (!savedMovies) return <div>Loading</div>;

  return (
    <>
      <CategoryTitle savedMovies-testId="category-title" title="Saved Movies" />
      <DisplayMovieList data={savedMovies.movies} />
      {!savedMovies.movies.length && <S.Title> No saved movies</S.Title>}
    </>
  );
};

export default SavedMovies;
