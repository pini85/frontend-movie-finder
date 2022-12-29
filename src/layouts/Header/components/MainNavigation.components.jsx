import * as S from './navigation.styles.js';
import { useSelector } from 'react-redux';
import NavigationLinks from './NavigationLinks.component';
import Logo from 'components/Logo/Logo.component';
import Login from 'components/Login/Login.component';
import Search from 'components/Search/Search.component';
import LightSwitch from 'components/LightSwitch/LightSwitch.component';
import Customize from 'components/Customize/Customize.component';
import IconLink from 'components/IconLink/IconLink';
import Hamburger from 'components/Hamburger/Hamburger.component.jsx';
import useWidth from 'hooks/useWidth.hooks.jsx';
const MainNavigation = () => {
  const currentUser = useSelector((state) => state.user.user);
  const width = useWidth().width;

  return (
    <>
      <Hamburger />
      <S.NavigationWrapper>
        {currentUser && <IconLink link="/savedMovies" icon="heart" />}
        <Login />
        {width > 700 && (
          <>
            <Customize />
            <LightSwitch />
            <Search />
          </>
        )}
      </S.NavigationWrapper>
    </>
  );
};

export default MainNavigation;
