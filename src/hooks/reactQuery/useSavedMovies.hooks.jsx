import { useQuery } from 'react-query';
import { getSavedMovies } from 'apis/constants';

const useSavedMovies = (userId) => {
  const { data: savedMovies, isLoading } = useQuery(
    ['saved-movies', userId],
    () => getSavedMovies(userId),
    { enabled: !!userId }
  );
  return { savedMovies, isLoading };
};

export default useSavedMovies;
