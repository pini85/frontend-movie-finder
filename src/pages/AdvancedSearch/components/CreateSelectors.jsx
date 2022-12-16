import { useState, useEffect } from 'react';
import { useAdvancedForm } from 'pages/AdvancedSearch/context/advancedSearchFormContext';
import SelectInput from 'components/SelectInput/SelectInput.component';
import useCreateSelectorsData from '../hooks/createFormData/createSelectorsData/useCreateSelectorsData';
import * as S from '../AdvancedSearchNew.styles';

const CreateSelectors = () => {
  const [createSelectors, setCreateSelectors] = useState([]);
  const { handleOnChange, selectorsData } = useAdvancedForm();
  const { createYears, createRating, createVoteCount, createGenres, createRunTimes } =
    useCreateSelectorsData();

  useEffect(() => {
    setCreateSelectors(selectors);
  }, [createYears, createRating, createVoteCount, createGenres, createRunTimes]);

  const selectors = [
    {
      name: 'fromYear',
      title: 'From',
      data: createYears,
    },
    {
      name: 'toYear',
      title: 'To',
      data: createYears,
    },
    {
      name: 'rating',
      title: 'Minimum Rating',
      data: createRating,
    },
    {
      name: 'voteCount',
      title: 'Minimum Votes',
      data: createVoteCount,
    },
    {
      name: 'genre',
      title: 'Genre',
      data: createGenres,
    },
    {
      name: 'runTime',
      title: 'Minimum Runtime',
      data: createRunTimes,
    },
  ];

  const renderSelectors = () => {
    return createSelectors.map((selector) => {
      return (
        <SelectInput
          key={selector.name}
          value={selectorsData[selector.name]}
          title={selector.title}
          name={selector.name}
          data={selector.data}
          handleOnChange={handleOnChange}
        >
          {selector.data}
        </SelectInput>
      );
    });
  };

  return selectors && <S.SelectorContainer>{renderSelectors()}</S.SelectorContainer>;
};
export default CreateSelectors;
