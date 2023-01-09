import * as S from './AIGeneratedMovies.styles.js';
import useGetMovieCategories from 'hooks/reactQuery/AI/useGetCategories.jsx';
import useGetNewCategory from 'hooks/reactQuery/AI/useGetNewCategory.jsx';
import CategoryTitle from 'components/CategoryTitle/CategoryTitle.component.jsx';
import Button from 'components/Button/Button.jsx';
import CategoryCard from './components/CategoryCard/CategoryCard.jsx';
import Film from 'components/Spinners/Film/Film.component.jsx';
import Spin from 'components/Spinners/Spin/Spin.component.jsx';
import SpinnerContainer from 'components/Spinners/SpinnerContainer/SpinnerContainer.jsx';

const AIGeneratedMovies = () => {
  const { data: categories, isFetching, isLoading } = useGetMovieCategories();
  const { mutation } = useGetNewCategory();
  const handleClick = () => {
    mutation.mutate();
  };

  const renderCategories = () => {
    return categories?.map((category, i) => {
      return <CategoryCard key={i} category={category} />;
    });
  };

  if (isLoading) {
    return (
      <SpinnerContainer>
        <Film />
      </SpinnerContainer>
    );
  }

  return (
    <>
      <CategoryTitle title="AI Generated Movies" />
      <S.Container>
        {renderCategories()}
        {isFetching ||
          (mutation.isLoading && (
            <S.SpinContainer>
              <Spin />
            </S.SpinContainer>
          ))}
      </S.Container>
      <S.ButtonContainer>
        <Button title="add new category" handleClick={handleClick} />
      </S.ButtonContainer>
    </>
  );
};
export default AIGeneratedMovies;
