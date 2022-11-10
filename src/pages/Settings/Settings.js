import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleHamburger } from 'redux/actions/index.js';
import CategoryTitle from 'components/CategoryTitle/CategoryTitle.component';
import * as S from './Settings.styles.js';
import ListOfOptions from './components/ListOfOptions/ListOfOptions.js';

const Settings = () => {
  const dispatch = useDispatch();
  const listOfSpinners = ['bouncing dvd', 'camera', 'spin'];
  const listOfThemes = ['default-theme', 'dark-theme', 'beige-theme'];

  //remove this logic once hamburger isOpen in its own state
  useEffect(() => {
    dispatch(toggleHamburger(false));
  }, []);

  return (
    <>
      <CategoryTitle title="customize your experience" />
      <S.Container>
        <ListOfOptions type="spinners" list={listOfSpinners} />
        <ListOfOptions type="themes" list={listOfThemes} />
      </S.Container>
    </>
  );
};
export default Settings;
