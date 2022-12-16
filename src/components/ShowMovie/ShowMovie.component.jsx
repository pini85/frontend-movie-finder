import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShowMovieInfo from '../../components/ShowMovieInfo/ShowMovieInfo.component';
import Button from 'components/Button/Button';

import MovieCast from 'components/MovieCast/MovieCast.component';
import Trailer from 'components/Trailer/Trailer.component';
import Reviews from 'components/Reviews/Review.component';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen.component';
import SaveMovie from 'components/SaveMovie/SaveMovie.component';
import NoInfo from 'components/NoInfo/NoInfo.component';
import * as S from './ShowMovie.styles';
import useGetMovie from 'hooks/reactQuery/useGetMovie.hooks';
import useIsSavedMovie from 'hooks/useIsSavedMovie.hooks';

const ShowMovie = () => {
  const userId = useSelector((state) => state.user?.user?._id);
  const navigate = useNavigate();
  const { id } = useParams();

  const { isLoading, data, isImdbId } = useGetMovie(id);

  const { isSaved } = useIsSavedMovie(userId, id);

  const handleWatch = () => {
    navigate(`/watch/${id}`);
  };

  if (isLoading) return <LoadingScreen />;
  if (!isLoading && !isImdbId) return <NoInfo />;

  return (
    <>
      {data && (
        <S.Container color1={data.colors.darkMuted} color2={data.colors.muted}>
          <Trailer colors={data.colors} poster={data.poster} id={id} />
          <S.MovieCard color={data.colors.lightVibrant}>
            {userId && <SaveMovie movie={data} isSaved={isSaved} id={Number(id)} />}
            <S.HeroContainer poster={data.backdrop}>
              <S.TopContainer>
                <ShowMovieInfo data={data} />
              </S.TopContainer>
            </S.HeroContainer>
            <S.BottomContainer>
              <S.LeftSide>
                <S.PlotContainer tagline={data.tagLine} color={data.colors.darkVibrant}>
                  {data.tagLine && (
                    <S.TagLineContainer>
                      <span>&ldquo;</span>
                      {data.tagLine}
                      <span>&rdquo;</span>
                    </S.TagLineContainer>
                  )}
                  <p>{data.plot}</p>
                </S.PlotContainer>

                <Reviews colors={data.colors} reviews={data.reviews} />
                <S.DirectorAndWriterContainer>
                  <div>Director: {data.director}</div>
                  <div>Writers: {data.writer}</div>
                </S.DirectorAndWriterContainer>
                <S.ButtonContainer>
                  <Button title="Watch Online" handleClick={handleWatch} />
                </S.ButtonContainer>
              </S.LeftSide>
            </S.BottomContainer>
            <S.MovieCastContainer color={data.colors.lightVibrant}>
              <MovieCast cast={data.cast} colors={data.colors} />
            </S.MovieCastContainer>
          </S.MovieCard>
        </S.Container>
      )}
    </>
  );
};

export default ShowMovie;
