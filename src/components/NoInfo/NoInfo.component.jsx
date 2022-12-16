import { useNavigate } from 'react-router-dom';
import * as S from './noInfo.styles.js';
import CategoryTitle from 'components/CategoryTitle/CategoryTitle.component.jsx';
import Button from 'components/Button/Button.jsx';
const NoInfo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <S.Container>
      <CategoryTitle title="Sorry. No information yet on this movie" />
      <Button title="Go Back" handleClick={handleClick} />
    </S.Container>
  );
};
export default NoInfo;
