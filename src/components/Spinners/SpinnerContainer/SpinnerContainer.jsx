import * as S from './SpinnerContainer.styles.jsx';
const SpinnerContainer = ({ children }) => {
  return (
    <S.Container>
      <S.Wrapper>{children}</S.Wrapper>
    </S.Container>
  );
};
export default SpinnerContainer;
