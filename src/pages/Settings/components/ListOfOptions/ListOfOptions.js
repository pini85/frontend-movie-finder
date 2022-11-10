import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayTheme, displaySpinner } from 'redux/actions/index';
import ListAnimation from '../ListAnimation/ListAnimation.js';
import OptionModal from '../OptionModal/OptionModal.js';
import SpinnerOptionsDisplay from '../OptionModal/SpinnerOptionsDisplay.js';
import ThemeOptionsDisplay from '../OptionModal/ThemeOptionsDsplay.js';
import * as S from './ListOfOptions.styles';

const ListOfOptions = ({ type, list }) => {
  const dispatch = useDispatch();
  const currentSpinner = useSelector((state) => state.displaySpinner);
  const currentTheme = useSelector((state) => state.displayTheme);

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
        return dispatch(displaySpinner(option));
      case 'themes':
        return dispatch(displayTheme(option));
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
