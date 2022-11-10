import { connect } from 'react-redux';
import { setHeaderHeight } from 'redux/actions/index';
import { useLayoutEffect, useRef } from 'react';
import * as S from './header.styles';
const Header = ({ children, setHeaderHeight }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const height = ref.current.offsetHeight;
    setHeaderHeight(height);
  }, [ref]);

  return <S.Header ref={ref}>{children}</S.Header>;
};

export default connect(null, {
  setHeaderHeight: setHeaderHeight,
})(Header);
