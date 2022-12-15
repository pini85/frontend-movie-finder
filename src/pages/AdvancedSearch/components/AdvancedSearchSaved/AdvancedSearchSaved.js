import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useSelector } from 'react-redux';
import { useAdvancedForm } from 'pages/AdvancedSearch/context/advancedSearchFormContext.js';
import { getSaveQuery, removeSaveQuery } from 'apis/constants.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import Button from 'components/Button/Button';
import OptionButtonWrapper from 'components/OptionButtonWrapper/OptionButtonWrapper.component';
import OptionButton from 'components/OptionButton/OptionButton.component';
import Spinner from 'components/Spinners/Spin/Spin.component';
import * as S from './AdvancedSearchSaved.styles.js';

const AdvancedSearchSaved = () => {
  const queryClient = useQueryClient();
  const { setInputData, setSelectorsData } = useAdvancedForm();
  const userId = useSelector((state) => state.user?.user?._id);

  const { data, isLoading } = useQuery(
    ['saved-queries', userId],
    () => getSaveQuery(userId),
    {
      enabled: !!userId,
    }
  );
  const removeQueryMutation = useMutation((queryId) => removeSaveQuery(userId, queryId), {
    onSuccess: () => queryClient.invalidateQueries('saved-queries', userId),
  });

  const queries = data?.data?.queries;

  const handleClick = (query) => {
    setInputData(query.query.inputData);
    setSelectorsData(query.query.selectorsData);
  };

  const handleRemoveClick = (queryId) => {
    removeQueryMutation.mutate(queryId);
  };
  const renderQueries = () => {
    if (queries.length < 1) {
      return <div style={{ marginBottom: '2rem' }}>No saved searches</div>;
    }
    return queries.map((query) => {
      return (
        <S.ButtonContainer key={query._id}>
          <OptionButtonWrapper
            color1="var(--primary-color-light)"
            color2="var(--primary-color)"
          >
            <OptionButton
              handleOptionClick={() => handleClick(query)}
              title={query.name}
              textColor="white"
            />
          </OptionButtonWrapper>
          <S.IconContainer onClick={() => handleRemoveClick(query._id)}>
            <FontAwesomeIcon icon={faTrash} />
          </S.IconContainer>
        </S.ButtonContainer>
      );
    });
  };
  return (
    <S.Container>
      <S.Title>Saved Search Results</S.Title>
      <S.SearchContainer>
        {userId && queries && renderQueries()}
        {!userId && <div style={{ marginBottom: '2rem' }}>Login to save movies</div>}

        {/* {props.displayUserSearches &&
          props.displayUserSearches.map((search, i) => {
            return (
              <S.ButtonContainer key={i}>
                <OptionButtonWrapper
                  color1="var(--primary-color-light)"
                  color2="var(--primary-color)"
                >
                  <OptionButton
                    handleOptionClick={() => handleClick(search)}
                    title={search.search.name}
                    textColor="white"
                  />
                </OptionButtonWrapper>
                <S.IconContainer onClick={() => handleRemoveClick(search)}>
                  <FontAwesomeIcon icon={faTrash} />
                </S.IconContainer>
              </S.ButtonContainer>
            );
          })} */}
      </S.SearchContainer>
    </S.Container>
  );
};

export default AdvancedSearchSaved;

// const AdvancedSearchSaved = () => {
//   const { inputData, selectorsData } = useAdvancedForm();
//   const saveQuery = () => {
//     const queries = queryCreator(inputData, selectorsData);
//   };

//   return <div>AdvancedSearchSaved</div>;
// };
// export default AdvancedSearchSaved;
