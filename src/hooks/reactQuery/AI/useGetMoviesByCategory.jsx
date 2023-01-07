import { useQuery } from 'react-query';
import { getMoviesByCategory } from 'apis/constants.js';
const useGetMoviesByCategories = (categoryName) => {
  const { data, isLoading, isFetching } = useQuery(
    ['ai-movies-by-category', categoryName],
    () => getMoviesByCategory(categoryName)
  );
  return { data: data?.data, isLoading, isFetching };
};
export default useGetMoviesByCategories;
