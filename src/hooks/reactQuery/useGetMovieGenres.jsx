import { useQuery } from 'react-query';
import { tmdbGenresApi } from 'apis/tmdbApi';
const useGetMovieGenres = () => {
  const { data } = useQuery('movie-genres', tmdbGenresApi);
  return { data };
};
export default useGetMovieGenres;
