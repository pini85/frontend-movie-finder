import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as S from './iconLink.styles';
const SavedMoviesLink = ({ link, icon }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'heart':
        return <S.Icon icon={faHeart} />;
      default:
        return null;
    }
  };
  return (
    <S.Container>
      <Link to={link}>{renderIcon()}</Link>
    </S.Container>
  );
};
export default SavedMoviesLink;
