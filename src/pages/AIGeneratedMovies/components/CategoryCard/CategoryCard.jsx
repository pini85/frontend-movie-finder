import { useNavigate } from 'react-router-dom';
import * as S from './CategoryCard.styles.js';
const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  const image = () => {
    if (category?.mainMovie?.poster_path === null) {
      return 'https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg';
    } else {
      return `https://image.tmdb.org/t/p/w185//${category?.mainMovie?.poster_path}`;
    }
  };
  const handleOnClick = () => {
    navigate(`/ai-generated-movies/${category?.categoryName}`);
  };
  return (
    <S.Container onClick={handleOnClick} image={image}>
      <S.CategoryTitleContainer>{category?.categoryName}</S.CategoryTitleContainer>
      <S.KeyWordsContainer>{category?.keywords.join(', ')}</S.KeyWordsContainer>
    </S.Container>
  );
};
export default CategoryCard;
