import { useNavigate } from 'react-router-dom';

import * as S from './MovieCastCarousel.styles';

const MovieCastCarousel = ({ colors, name, character, profile }) => {
  let navigate = useNavigate();
  const profileImage = () => {
    return profile
      ? `https://image.tmdb.org/t/p/w138_and_h175_face/${profile}`
      : 'https://i.ibb.co/nLjmy5r/empty-Profile.png';
  };
  const handleClick = () => {
    // fetchActorMovies(name, 1);
    // showSearchResults('actor');

    navigate(`/movies/actors/${name}/page/1`);
  };

  return (
    <S.Container
      onClick={handleClick}
      fontColor={colors.darkMuted}
      color={colors.vibrant}
    >
      <S.Img
        profile={profile}
        borderColor={colors.darkMuted}
        src={profileImage()}
        alt=""
      />
      <S.BottomContainer>
        <S.NameContainer>{name}</S.NameContainer>
        <S.CharacterContainer>{character}</S.CharacterContainer>
      </S.BottomContainer>
    </S.Container>
  );
};
export default MovieCastCarousel;
