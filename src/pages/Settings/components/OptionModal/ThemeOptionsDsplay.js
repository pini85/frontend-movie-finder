import * as S from './OptionModal.styles';

const ThemeOptionsDisplay = ({ option }) => {
  const themeName = option.split('-').join(' ');

  return (
    <div className={option}>
      <S.ThemeTitle>{themeName}</S.ThemeTitle>
      <S.ThemeContainer>
        <div>
          <S.ThemeDescription>Primary Color</S.ThemeDescription>
          <S.ColorBox type="primary" />
        </div>
        <div>
          <S.ThemeDescription>Secondary Color</S.ThemeDescription>
          <S.ColorBox type="secondary" />
        </div>
      </S.ThemeContainer>
    </div>
  );
};
export default ThemeOptionsDisplay;
