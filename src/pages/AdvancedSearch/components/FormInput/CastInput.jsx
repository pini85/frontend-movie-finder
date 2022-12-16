import { useEffect } from 'react';
import { useAdvancedForm } from 'pages/AdvancedSearch/context/advancedSearchFormContext';
import { useQuery } from 'react-query';
import { tmdbCastId } from '../../../../apis/tmdbApi';
import Button from 'components/Button/Button';
import CastSuggestion from 'components/CastSuggestion/CastSuggestion.component';
import AnimateInput from './AnimateInput';
import useActorsDataInput from '../../hooks/createFormData/createInputsData/useActorsDataInput';
import CastOptions from 'components/CastOptions/CastOptions.component.jsx';
import * as S from '../CreateInputs.styles';

const CastInput = ({
  name,
  type,
  inputRef,
  setShowInput,
  showInput,
  value,
  children,
}) => {
  const { setInputData, inputData, inputValues, setInputValues } = useAdvancedForm();
  const { suggestions } = useActorsDataInput({ searchQuery: value, type });

  const { data, refetch } = useQuery(value, () => tmdbCastId(value), {
    refetchOnWindowFocus: false,
    enabled: false, // disable this query from automatically running
  });
  useEffect(() => {
    if (!data) return;
    setInputData({
      ...inputData,
      [name]: {
        ...inputData[name],
        casts: [...inputData[name].casts, { name: value, id: data.results[0].id }],
      },
    });
    inputRef.current.focus();
    setInputValues({ ...inputValues, [name]: '' });
  }, [data]);

  const castsSuggestions = suggestions?.castObj?.casts;

  const addCast = (e) => {
    e.preventDefault();
    refetch();
  };

  const addCastFromSuggestions = (castName) => {
    setInputValues({ ...inputValues, [name]: castName });
  };

  const renderActorSuggestions = () => {
    return castsSuggestions.map((cast) => {
      return (
        <CastSuggestion name={cast.name} key={cast.id} cb={addCastFromSuggestions} />
      );
    });
  };

  return (
    <S.InputWrapper>
      <AnimateInput
        input={children}
        dropDownOption={
          <CastOptions name={name} setShowInput={setShowInput} showInput={showInput} />
        }
        showInput={showInput}
      />
      <Button handleClick={addCast} padding="0.5rem 1rem" height="3rem" title="&#43;" />

      {castsSuggestions && value && (
        <S.SuggestionContainer>{renderActorSuggestions()}</S.SuggestionContainer>
      )}
    </S.InputWrapper>
  );
};
export default CastInput;
