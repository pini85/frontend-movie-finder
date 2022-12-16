import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { tmdbCastMoviesApi, tmdbCastId } from 'apis/tmdbApi';
import CategoryTitle from 'components/CategoryTitle/CategoryTitle.component';
import Pagination from 'components/Pagination/Pagination.component';
import DisplayMovieList from 'components/DisplayMovieList/DisplayMovieList.jsx';
const ActorMovies = () => {
  const { name, page } = useParams();

  const { data: castId } = useQuery(name, () => tmdbCastId(name));

  const id = castId?.results[0].id;

  const { data: movies } = useQuery([name, page], () => tmdbCastMoviesApi(id, page), {
    enabled: !!id,
  });

  const title = `${name}'s movies`;

  return (
    <>
      <CategoryTitle title={title} />
      <Pagination pages={movies?.total_pages} />
      {movies && <DisplayMovieList data={movies.results} />}
    </>
  );
};

export default ActorMovies;
