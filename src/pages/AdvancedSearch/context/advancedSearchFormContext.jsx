import React, { useState, useContext, createContext } from 'react';

const AdvancedSearchFormContext = createContext();

const useAdvancedForm = () => {
  const context = useContext(AdvancedSearchFormContext);
  if (!context) {
    throw new Error('useAdvancedForm must be used within a AdvancedForm Provider');
  }
  return context;
};

const AdvancedFormProvider = (props) => {
  const [selectorsData, setSelectorsData] = useState({
    fromYear: '',
    toYear: '',
    minmumRating: '',
    minumumVotes: '',
    genre: '',
    minumumRuntime: '',
  });
  const [inputData, setInputData] = useState({
    actors: { type: null, casts: [] },
    directors: { type: null, casts: [] },
    writers: { type: null, casts: [] },
  });
  const [inputValues, setInputValues] = useState({
    actors: '',
    directors: '',
    writers: '',
  });

  console.log('inputData', inputData);
  const searchResults = () => {
    return { ...inputData, ...selectorsData };
  };

  const resetForm = () => {
    setSelectorsData({
      fromYear: '',
      toYear: '',
      minmumRating: '',
      minumumVotes: '',
      genre: '',
      minumumRuntime: '',
    });
    setInputData({
      actors: { type: null, casts: [] },
      directors: { type: null, casts: [] },
      writers: { type: null, casts: [] },
    });
  };

  const handleOnChange = (e, inputType) => {
    if (inputType === 'input') {
      setInputValues((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      });
    }
    if (inputType === 'selector') {
      setSelectorsData((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      });
    }
  };

  const value = {
    handleOnChange,
    selectorsData,
    setSelectorsData,
    setInputValues,
    inputValues,
    inputData,
    setInputData,
    resetForm,
    searchResults,
  };

  return <AdvancedSearchFormContext.Provider value={value} {...props} />;
};

export { AdvancedFormProvider, useAdvancedForm };
