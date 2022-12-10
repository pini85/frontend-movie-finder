import * as S from './navigation.styles.js';
import { connect } from 'react-redux';
import NavigationLinks from './NavigationLinks.component';
import Logo from 'components/Logo/Logo.component';
import Login from 'components/Login/Login.component';
import Search from 'components/Search/Search.component';
import LightSwitch from 'components/LightSwitch/LightSwitch.component';
import Customize from 'components/Customize/Customize.component';
import IconLink from 'components/IconLink/IconLink';
import Hamburger from 'components/Hamburger/Hamburger.component.jsx';
import useWidth from 'hooks/useWidth.hooks.jsx';
const MainNavigation = ({ currentUser }) => {
  const width = useWidth().width;

  return (
    <>
      {width < 1050 && <Hamburger />}
      {width > 1050 && (
        <>
          <Logo />
          <NavigationLinks />
        </>
      )}
      <S.NavigationWrapper>
        {currentUser && <IconLink link="/savedMovies" icon="heart" />}
        <Login />
        {width > 650 && (
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
const mapStateToProps = (state) => ({
  currentUser: state.user,
});
export default connect(mapStateToProps)(MainNavigation);
