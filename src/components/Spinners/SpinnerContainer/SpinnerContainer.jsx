import * as S from './spinnerContainer.styles.jsx';
const SpinnerContainer = ({ children }) => {
  return (
    <S.Container>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  );
};
export default SpinnerContainer;
