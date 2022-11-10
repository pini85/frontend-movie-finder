import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import useWidth from 'hooks/useWidth.hooks';

import * as S from './castSuggestion.styles.js';
const CastSuggestion = ({ cast, handleClick }) => {
  const width = useWidth().width;
  const castDepartment = cast.known_for_department === 'Acting' ? 'Actor' : 'Director';
  return (
    <S.CardContainer onClick={() => handleClick(cast)} width={width}>

      <S.Img src={`https://image.tmdb.org/t/p/w92/${cast.profile_path}`} alt="" />
      <S.CardWrapper>
        <S.Title> {cast.name}</S.Title>
        <S.IconAndYearContainer>
          <FontAwesomeIcon icon={faUser} style={{ marginBottom: '5px' }} />
          <S.CastDepartment>{castDepartment}</S.CastDepartment>
        </S.IconAndYearContainer>
      </S.CardWrapper>
    </S.CardContainer>
  );
};
export default CastSuggestion;
