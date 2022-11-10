import AdvancedSearchNewView from './components/AdvancedSearchNewForm.js';
import AdvancedSearchResults from './components/AdvancedSearchResults/AdvancedSearchResults.js';
import AdvancedSearchSaved from './components/AdvancedSearchSaved/AdvancedSearchSaved.js';
import CategoryTitle from 'components/CategoryTitle/CategoryTitle.component';
import { AdvancedFormProvider } from './context/advancedSearchFormContext';
import * as S from './AdvancedSearchNew.styles.js';
const AdvancedSearchNew = () => {
  return (
    <S.Container>
      <CategoryTitle title="advanced search" />
      <AdvancedFormProvider>
        <AdvancedSearchNewView />
        <S.BottomSearchContainer>
          <AdvancedSearchResults />
          <S.Divider />
          <AdvancedSearchSaved />
        </S.BottomSearchContainer>
      </AdvancedFormProvider>
    </S.Container>
  );
};
export default AdvancedSearchNew;
