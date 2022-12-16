import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Options from 'components/Options/Options.component';
import CategoryTitle from 'components/CategoryTitle/CategoryTitle.component';
import Pagination from 'components/Pagination/Pagination.component';
import DisplayMovieList from 'components/DisplayMovieList/DisplayMovieList.jsx';
import { latestMovies, highestRated } from 'utlis/apiTabObjects';

const Movies = () => {
  const params = useParams();
  const { page } = params;

  const [optionIndex, setOptionIndex] = useState(0);
  // const [page, setPage] = useState(1);

  const movieCategories = [
    latestMovies,
    highestRated,
    // {title:'now in the theaters',api:},
    //  {title: 'upcoming in theaters',api:},
  ];

  const title = movieCategories[optionIndex].title;
  const apiCall = movieCategories[optionIndex].api;

  const { data } = useQuery([title, page], () => apiCall(page), {
    keepPreviousData: true,
  });

  return (
    <>
      <CategoryTitle title="movies"></CategoryTitle>
      <Options
        setOption={setOptionIndex}
        options={movieCategories}
        activeIndex={optionIndex}
      />
      <Pagination pages={data?.total_pages} />
      {data && <DisplayMovieList data={data.results} />}
    </>
  );
};
export default Movies;
