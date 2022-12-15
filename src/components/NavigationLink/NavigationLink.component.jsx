import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './navigationLink.styles';
const NavbarItem = ({ link, children }) => {
  return (
    <Container>
      <Link to={link}>{children}</Link>
    </Container>
  );
};

export default NavbarItem;
