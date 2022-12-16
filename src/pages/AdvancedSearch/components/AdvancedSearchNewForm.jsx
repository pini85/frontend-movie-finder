import { useAdvancedForm } from '../context/advancedSearchFormContext';
import { useNavigate } from 'react-router-dom';
import CreateInputs from './CreateInputs';
import CreateSelectors from './CreateSelectors';
import queryCreator from '../queryCreator';
import Button from 'components/Button/Button';
import * as S from '../AdvancedSearchNew.styles';

const AdvancedSearchNewView = () => {
  const navigate = useNavigate();
  const { inputData, selectorsData } = useAdvancedForm();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const queries = queryCreator(inputData, selectorsData);

    navigate(`/search/advanced-search/${queries}/page/1`);
  };

  return (
    <S.FormContainer>
      <CreateSelectors />
      <CreateInputs />
      <S.ButtonContainer>
        <Button handleClick={handleSubmit} title="Search" />
      </S.ButtonContainer>
    </S.FormContainer>
  );
};
export default AdvancedSearchNewView;
