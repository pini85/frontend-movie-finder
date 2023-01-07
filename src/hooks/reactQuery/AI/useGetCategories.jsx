import { useQuery } from 'react-query';
import { getMovieCategories } from 'apis/constants.js';
const useGetMovieCategories = () => {
  const { data, isLoading, isFetching } = useQuery(
    'ai-movie-categories',
    getMovieCategories
  );
  return { data: data?.data, isLoading, isFetching };
};
export default useGetMovieCategories;
