import { useMutation, useQueryClient } from 'react-query';
import { getNewMoviesByCategory } from 'apis/constants.js';
const useGetNewMoviesByCategories = (categoryName) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => getNewMoviesByCategory(categoryName),
    onSuccess: () => {
      queryClient.invalidateQueries(['ai-movies-by-category', categoryName]);
    },
  });

  return { mutation };
};
export default useGetNewMoviesByCategories;
