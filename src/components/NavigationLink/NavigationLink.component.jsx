import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { currentPage } from '../../redux/actions/index';
import { Container } from './navigationLink.styles';
const NavbarItem = ({ link, children }) => {
  return (
    <Container>
      <Link to={link}>{children}</Link>
    </Container>
  );
};

export default NavbarItem;
