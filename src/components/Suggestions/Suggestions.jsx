import React from 'react';
import MovieSuggestion from './components/MovieSuggestion/MovieSuggestion.component';
import CastSuggestion from './components/CastSuggestion/CastSuggestion.component';

import { useNavigate } from 'react-router-dom';

import * as S from './suggestions.styles';

const Suggestions = ({ suggestions, setSearchQuery }) => {
  let navigate = useNavigate();
  const handleClick = (obj) => {
    setSearchQuery('');
    if (obj.known_for_department === 'Acting') {
      navigate(`/movies/actors/${obj.name}/page/1`);
    } else {
      navigate(`/movie/${obj.id}`);
    }
  };

  const renderMovieSuggestionCard = () => {
    return suggestions.movieObj.movies.map((movie) => {
      return <MovieSuggestion movie={movie} handleClick={handleClick} />;
    });
  };
  const renderCastSuggestionCard = () => {
    return suggestions.castObj.casts.map((cast) => {
      return <CastSuggestion cast={cast} handleClick={handleClick} />;
    });
  };
  renderCastSuggestionCard();

  return (
    <S.Container>
      {renderCastSuggestionCard()}
      {renderMovieSuggestionCard()}
    </S.Container>
  );
};

const mapStateToProps = (state) => ({
  toggleHamburger: state.toggleHamburger,
});

export default Suggestions;
