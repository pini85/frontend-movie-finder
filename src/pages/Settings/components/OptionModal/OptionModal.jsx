import Modal from 'components/Modal/Modal.component';
import Button from 'components/Button/Button';

import * as S from './OptionModal.styles';

const OptionModal = ({ isOpen, setOpen, option, handleSave, children }) => {
  return (
    <Modal
      isToggled={isOpen}
      setToggled={setOpen}
      dvd={option === 'bouncing dvd'}
      title="What do you think?"
    >
      {children}

      <S.ButtonContainer option={option}>
        <Button handleClick={() => handleSave(option)} title="save"></Button>
        <Button handleClick={() => setOpen(false)} title="cancel"></Button>
      </S.ButtonContainer>
    </Modal>
  );
};
export default OptionModal;
