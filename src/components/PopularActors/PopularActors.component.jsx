import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Papa from 'papaparse';
import CategoryTitle from 'components/CategoryTitle/CategoryTitle.component';
import Pagination from 'components/Pagination/Pagination.component';
import ActorCard from 'components/ActorCard/ActorCard.component';
import * as S from './PopularActors.styles';
const PopularActors = () => {
  const navigate = useNavigate();
  const params = useParams();
  const urlPage = Number(params.page);

  const [page, setPage] = useState(1);
  const [actors, setActors] = useState(null);

  const handleClick = (name) => {
    navigate(`/movies/actors/${name}/page/1`);
  };

  useEffect(() => {
    setPage(urlPage);
  }, [urlPage]);

  useEffect(() => {
    const actors = (data) => {
      let actors = {};
      let names = [];
      const actorsPerPage = 10;
      const totalPages = data && Math.round(data.length / actorsPerPage);
      actors.total_pages = totalPages;
      actors.total_results = data && data.length;

      for (let index in data) {
        names.push(data[index][0]);
      }
      let pageNumber = 1;
      for (let j = 1; j < names.length; j += actorsPerPage) {
        actors[pageNumber] = names.slice(j, j + 10);
        pageNumber++;
      }

      if (Object.keys(actors).length > 0 && actors.total_pages) {
        setActors(actors);
      }
    };
    actors();

    const parseData = (url, callBack) => {
      Papa.parse(url, {
        download: true,
        dynamicTyping: true,
        complete: (results) => {
          callBack(results.data);
        },
      });
    };
    parseData(
      'https://raw.githubusercontent.com/data-8/tutor/master/Week2/actors.csv',
      actors
    );
  }, []);

  const renderActors = () => {
    return actors[page - 0].map((actor) => {
      return <ActorCard handleClick={handleClick} key={actor} actor={actor} />;
    });
  };

  return (
    <>
      <CategoryTitle title="popular actors" />
      {actors && <Pagination pages={actors.total_pages} page={page} />}
      {actors && <S.Container>{renderActors()}</S.Container>}
    </>
  );
};

export default PopularActors;
