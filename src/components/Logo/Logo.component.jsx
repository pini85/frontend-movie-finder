import { Link } from 'react-router-dom';

import UseWidth from '../../hooks/useWidth.hooks';
import { Img } from './Logo.styles';
const Logo = () => {
  const width = UseWidth().width;

  return (
    <Link to="/">
      <div>
        <Img width={width} src="https://i.ibb.co/mX8gJfH/logo.png" alt="" />
      </div>
    </Link>
  );
};

export default Logo;
