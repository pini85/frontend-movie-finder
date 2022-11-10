import { useState } from 'react';
import Button from 'components/Button/Button.jsx';
import { useAdvancedForm } from 'pages/AdvancedSearch/context/advancedSearchFormContext.js';
import * as S from './AdvancedSearchResults.styles.js';
import SaveQuery from './components/SaveQuery/SaveQuery.js';

const AdvancedSearchResults = () => {
  const [isSaved, setSaved] = useState(false);
  const { searchResults, resetForm } = useAdvancedForm();

  const displaySearchResults = () => {
    const results = Object.entries(searchResults());
    return results.map((result) => {
      let value;
      const name = result[0].replace(/([A-Z])/g, ' $1').trim();
      const isCast = result[1].casts;

      if (isCast) {
        value = result[1].casts.length
          ? result[1].casts.map((cast) => {
              return <div>{cast.name}</div>;
            })
          : 'N/A';
      } else {
        value = result[1] ? result[1] : 'N/A';
      }

      return (
        <S.ResultWrapper key={result[0]}>
          <S.ResultSpan>{name}</S.ResultSpan> : {value}
        </S.ResultWrapper>
      );
    });
  };

  const handleOnReset = () => resetForm();

  const handleOnSave = () => setSaved(true);

  return (
    <S.Container>
      <S.Title>Search Information</S.Title>
      {displaySearchResults()}
      <S.ButtonContainer>
        <Button handleClick={handleOnReset} title="reset"></Button>
        <div style={{ margin: '0 2rem' }}></div>
        <Button handleClick={handleOnSave} title="save"></Button>
      </S.ButtonContainer>
      <SaveQuery isSaved={isSaved} setSaved={setSaved} />
    </S.Container>
  );
};
export default AdvancedSearchResults;
