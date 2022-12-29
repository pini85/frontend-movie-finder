import React from 'react';
import * as S from './Navigation.styles';
import Customize from 'components/Customize/Customize.component';
import Search from 'components/Search/Search.component';
import LightSwitch from 'components/LightSwitch/LightSwitch.component';
import { Link } from 'react-router-dom';
import useWidth from '../../hooks/useWidth.hooks';
import { navLinks } from 'utlis/applicationData';
const Navigation = ({ setOpen }) => {
  const width = useWidth().width;
  const handleClick = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const renderLinks = () => {
    return navLinks.map((el, i) => {
      return (
        <Link key={i} onClick={(e) => handleClick(e)} to={el.link}>
          <S.Option>{el.title}</S.Option>
        </Link>
      );
    });
  };

  return (
    <S.Container>
      {width < 650 && (
        <>
          <S.CustomizeContainer>
            <LightSwitch />
            <Customize />
          </S.CustomizeContainer>
          <S.SearchContainer>
            <Search setOpen={setOpen} />
          </S.SearchContainer>
        </>
      )}
      <S.Options>{renderLinks()}</S.Options>
    </S.Container>
  );
};
export default Navigation;
