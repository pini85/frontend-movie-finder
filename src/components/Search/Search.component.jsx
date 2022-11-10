import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useNavigate } from 'react-router-dom';
import {
  search,
  fetchMovies,
  movieSuggestions,
  showSearchResults,
  fetchCastSuggestion,
} from '../../redux/actions';

import { useForm, FormProvider } from 'react-hook-form';
import useGetSuggestions from 'hooks/reactQuery/useGetSuggestions';
import Suggestion from 'components/Suggestions/Suggestions';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input.component';
import useWidth from '../../hooks/useWidth.hooks';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { suggestions } = useGetSuggestions(searchQuery, true, true, 4, 2);

  const methods = useForm();

  const width = useWidth().width;
  let navigate = useNavigate();
  //! refactor with debounce. look at shani's whatsapp

  const handleClick = () => {
    setSearchQuery('');
    navigate(`/search/search/${searchQuery}/page/1`);
  };

  const container = {
    display: 'flex',
    alignItems: 'center',
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const showSuggestions = Object.keys(suggestions).length && searchQuery.length;

  return (
    <>
      <FormProvider {...methods}>
        <form style={container}>
          <Input
            name="search"
            type="search"
            label="Search"
            value={searchQuery}
            handleOnChange={handleChange}
            placeholder="Search"
          />
        </form>
      </FormProvider>
      <Button
        icon="search"
        title="search"
        // disabled={isSending}
        handleClick={(e) => handleClick(e)}
      ></Button>

      {showSuggestions && (
        <Suggestion suggestions={suggestions} setSearchQuery={setSearchQuery} />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isSending: state.isSending,
  // fetchMoves: state.fetchMovies,
  selectedMovies: state.selectedMovies,
  movieSuggestions: state.movieSuggestions,
  castSuggestions: state.castSuggestions,
  query: state.search,
});

export default compose(
  connect(mapStateToProps, {
    search: search,
    fetchMovies: (page) => fetchMovies(page),
    fetchMovieSuggestions: movieSuggestions,
    showSearchResults: showSearchResults,
    fetchCastSuggestion: fetchCastSuggestion,
  })
)(Search);
