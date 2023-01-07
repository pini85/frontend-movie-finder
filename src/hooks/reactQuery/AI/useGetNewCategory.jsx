import { useMutation, useQueryClient } from 'react-query';
import { getNewCategory } from 'apis/constants.js';
const useGetMovieCategories = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: getNewCategory,
    onSuccess: () => {
      queryClient.invalidateQueries('ai-movie-categories');
    },
  });

  return { mutation };
};
export default useGetMovieCategories;
