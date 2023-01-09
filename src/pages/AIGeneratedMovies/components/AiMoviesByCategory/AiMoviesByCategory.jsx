import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DisplayMovieList from 'components/DisplayMovieList/DisplayMovieList';
import useGetMoviesByCategories from 'hooks/reactQuery/AI/useGetMoviesByCategory';
import useGetNewMoviesByCategories from 'hooks/reactQuery/AI/useGetNewMoviesByCategory';
import Film from 'components/Spinners/Film/Film.component.jsx';
import SpinnerContainer from 'components/Spinners/SpinnerContainer/SpinnerContainer.jsx';
import CategoryTitle from 'components/CategoryTitle/CategoryTitle.component.jsx';
const AiMoviesByCategory = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { categoryName } = useParams();
  const { mutation } = useGetNewMoviesByCategories(categoryName);
  const { data } = useGetMoviesByCategories(categoryName);

  useEffect(() => {
    if (!data) return;
    if (data?.movies?.length) {
      setIsLoading(false);
    } else {
      mutation.mutate();
    }
  }, [data]);
  if (isLoading) {
    return (
      <SpinnerContainer>
        <Film />
      </SpinnerContainer>
    );
  }
  if (data?.movies?.length) {
    const getFirstMovie = data.mainMovie;
    const restOfMovies = data.movies;
    const movies = [getFirstMovie, ...restOfMovies];
    return (
      <>
        <CategoryTitle title={categoryName} />
        <DisplayMovieList data={movies} />;
      </>
    );
  }
};
export default AiMoviesByCategory;
