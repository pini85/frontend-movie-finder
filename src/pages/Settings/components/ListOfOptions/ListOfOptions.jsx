import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, setSpinner } from '../../../../redux/slices/uiSlice.js';
import ListAnimation from '../ListAnimation/ListAnimation.jsx';
import OptionModal from '../OptionModal/OptionModal.jsx';
import SpinnerOptionsDisplay from '../OptionModal/SpinnerOptionsDisplay.jsx';
import ThemeOptionsDisplay from '../OptionModal/ThemeOptionsDsplay.jsx';
import * as S from './ListOfOptions.styles';

const ListOfOptions = ({ type, list }) => {
  const dispatch = useDispatch();
  const currentSpinner = useSelector((state) => state.ui.spinner);
  const currentTheme = useSelector((state) => state.ui.theme);

  const [option, setOption] = useState(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    switch (type) {
      case 'spinners':
        return setOption(currentSpinner);
      case 'themes':
        return setOption(currentTheme);
      default:
        return null;
    }
  }, []);

  const handleSave = (option) => {
    setOpen(false);
    switch (type) {
      case 'spinners':
        return dispatch(setSpinner(option));
      case 'themes':
        return dispatch(setTheme(option));
    }
  };

  const handleClick = (option) => {
    setOpen(true);
    setOption(option);
  };

  const renderOptions = () => {
    return list.map((el) => {
      return (
        <S.OptionContainer
          key={el}
          active={option === el}
          onClick={() => handleClick(el)}
        >
          {el}
        </S.OptionContainer>
      );
    });
  };
  const renderModalType = () => {
    switch (type) {
      case 'spinners':
        return <SpinnerOptionsDisplay option={option} />;
      case 'themes':
        return <ThemeOptionsDisplay option={option} />;
      default:
        return null;
    }
  };
  return (
    <>
      <ListAnimation title={type}>{renderOptions()}</ListAnimation>
      {isOpen && (
        <OptionModal
          isOpen={isOpen}
          setOpen={setOpen}
          option={option}
          handleSave={handleSave}
        >
          {renderModalType()}
        </OptionModal>
      )}
    </>
  );
};
export default ListOfOptions;
