import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useForm, FormProvider } from 'react-hook-form';
import useGetSuggestions from 'hooks/reactQuery/useGetSuggestions';
import Suggestion from 'components/Suggestions/Suggestions';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input.component';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { suggestions } = useGetSuggestions(searchQuery, true, true, 4, 2);

  const methods = useForm();

  let navigate = useNavigate();

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

export default Search;
