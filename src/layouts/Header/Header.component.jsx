import { useDispatch } from 'react-redux';
import { setHeaderHeight } from '../../redux/slices/ui.slice';

import { useLayoutEffect, useRef } from 'react';
import * as S from './header.styles';
const Header = ({ children }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  useLayoutEffect(() => {
    const height = ref.current.offsetHeight;
    dispatch(setHeaderHeight(height));
  }, [ref]);

  return <S.Header ref={ref}>{children}</S.Header>;
};

export default Header;
