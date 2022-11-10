import { useEffect, useState } from 'react';
import useSavedMovies from './reactQuery/useSavedMovies.hooks';

const useIsSavedMovie = (userId, movieId) => {
  const [isSaved, setIsSaved] = useState(false);
  const { savedMovies } = useSavedMovies(userId);

  useEffect(() => {
    if (!savedMovies) return;
    const isSaved = !!savedMovies.movies?.find((movie) => {
      return movie.id === Number(movieId);
    });
    setIsSaved(isSaved);
  }, [savedMovies]);

  return { isSaved };
};

export default useIsSavedMovie;
