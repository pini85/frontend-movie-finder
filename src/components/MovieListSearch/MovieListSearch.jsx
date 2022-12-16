import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { tmdbAdvancedMoviesApi, tmdbSearchApi } from 'apis/tmdbApi';
import DisplayMovieList from 'components/DisplayMovieList/DisplayMovieList.jsx';
import CategoryTitle from 'components/CategoryTitle/CategoryTitle.component';
import Pagination from 'components/Pagination/Pagination.component';
const MovieListSearch = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  const { page, query, type } = params;

  const isAdvancedSearch = type === 'advanced-search';

  const isMovieSearch = type === 'search';

  const { data: advancedSearchData } = useQuery(
    ['advanced-search', query, page],
    () => tmdbAdvancedMoviesApi(query, page),
    {
      keepPreviousData: true,
      enabled: !!isAdvancedSearch,
    }
  );
  const { data: moviesSearchData } = useQuery(
    ['search', query, page],
    () => tmdbSearchApi(query, page),
    {
      keepPreviousData: true,
      enabled: !!isMovieSearch,
    }
  );

  const data = advancedSearchData || searchResults;

  const searchType = () => {
    if (moviesSearchData.results[0]?.media_type === 'person') {
      const name = moviesSearchData.results[0].name;
      navigate(`/movies/actors/${name}/page/1`);
    } else {
      const filterOnlyMovies = moviesSearchData.results.filter(
        (result) => result.media_type === 'movie'
      );
      const movies = {
        results: filterOnlyMovies,
        total_pages: moviesSearchData.total_pages,
        total_results: moviesSearchData.total_results,
      };

      setSearchResults(movies);
    }
  };
  const title = () => {
    if (searchResults) {
      return 'Movie Search Results';
    } else {
      return 'Advanced Search Results';
    }
  };

  useEffect(() => {
    if (!moviesSearchData) return;

    searchType();
  }, [moviesSearchData]);
  if (data.length < 1) return 'No search results';
  return (
    data && (
      <>
        <CategoryTitle title={title()} />
        <Pagination pages={data.total_pages} />
        <DisplayMovieList data={data.results} />
      </>
    )
  );
};
export default MovieListSearch;
