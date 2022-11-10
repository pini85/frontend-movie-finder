import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { tmdbIdApi, tmdbMovieCreditsApi, tmdbMovieReviewsApi } from 'apis/tmdbApi';
import omdbApi from 'apis/omdbApi';
import modifyMovieData from 'utlis/modifyMovieData';

const useGetMovie = (id) => {
  const [data, setData] = useState(null);
  const [isImdbId, setIsImdbId] = useState(true);

  const { data: tmdbData, isLoading: tmdbLoading } = useQuery(
    ['tmdb-movie', id],
    () => tmdbIdApi(id)
  );

  const { data: credits, isLoading: creditsLoading } = useQuery(
    ['credits-movie', id],
    () => tmdbMovieCreditsApi(id)
  );

  const { data: reviews, isLoading: reviewsLoading } = useQuery(
    ['reviews-movie', id],
    () => tmdbMovieReviewsApi(id)
  );

  const imdbId = tmdbData?.imdb_id;
  const { data: omdbData, isLoading: omdbLoading } = useQuery(
    ['omdb-movie', imdbId],
    () => omdbApi(imdbId),
    {
      enabled: !!imdbId,
    }
  );

  useEffect(() => {
    if (!omdbData) return;
    const getData = async () => {
      const movieData = await modifyMovieData(tmdbData, omdbData, credits, reviews);
      setData(movieData);
    };
    getData();
  }, [omdbData]);

  useEffect(() => {
    if (!tmdbLoading) {
      if (!tmdbData.imdb_id) {
        return setIsImdbId(false);
      }
    }
  }, [tmdbLoading]);

  const allLoaders = [tmdbLoading, omdbLoading, creditsLoading, reviewsLoading];
  const isLoading = allLoaders.some((loader) => loader === true);
  //
  return { isLoading, isImdbId, data };
};

export default useGetMovie;
