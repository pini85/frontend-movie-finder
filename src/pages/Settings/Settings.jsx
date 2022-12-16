import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoryTitle from 'components/CategoryTitle/CategoryTitle.component';
import * as S from './Settings.styles.js';
import ListOfOptions from './components/ListOfOptions/ListOfOptions.jsx';

const Settings = () => {
  const listOfSpinners = ['bouncing dvd', 'camera', 'spin'];
  const listOfThemes = ['default-theme', 'dark-theme', 'beige-theme'];

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
