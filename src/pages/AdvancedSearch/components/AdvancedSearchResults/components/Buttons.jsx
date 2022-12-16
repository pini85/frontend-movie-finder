import Button from 'components/Button/Button.jsx';
import * as S from './Buttons.styles.js';
const Buttons = ({ handleOnReset, handleOnSave }) => {
  return (
    <S.Container>
      <Button handleClick={handleOnReset} title="reset"></Button>
      <div style={{ margin: '0 2rem' }}></div>
      <Button handleClick={handleOnSave} title="save"></Button>
    </S.Container>
  );
};
export default Buttons;
