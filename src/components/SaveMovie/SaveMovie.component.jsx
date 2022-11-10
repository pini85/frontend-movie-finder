import { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useMutation, useQueryClient } from 'react-query';
import { saveMovie, removeSavedMovie } from 'apis/constants';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import * as S from './SaveMovie.styles';
const SaveMovie = ({ isSaved, movie, id, user }) => {

  const queryClient = useQueryClient();
  const [saved, setSaved] = useState(false);

  const saveMovieMutation = useMutation((movie) => saveMovie(user._id, movie), {
    onSuccess: () => queryClient.invalidateQueries('saved-movies', user._id),
  });
  const removeMovieMutation = useMutation((id) => removeSavedMovie(user._id, id), {
    onSuccess: () => queryClient.invalidateQueries('saved-movies', user._id),
  });

  useEffect(() => {
    setSaved(isSaved);
  }, []);

  const handleClick = async () => {
    if (saved) {
      const movieId = movie.id ?? Number(id);
      removeMovieMutation.mutate(movieId);
      return setSaved(false);
    }
    const movieObj = {
      poster_path: movie.poster_path ?? movie.poster,
      vote_average: movie.vote_average ?? movie.tmdbRating,
      release_date: movie.release_date ?? movie.year,
      title: movie.title,
      id: movie.id ?? id,
    };
    // const data = await axios.post(`/api/${user._id}/movies/add`, { movieObj });
    saveMovieMutation.mutate(movieObj);
    return setSaved(true);
  };

  return (
    <S.Container>
      {/* {user && ( */}
      <S.Button aria-label="save" onClick={handleClick}>
        <S.StyledFontAwesomeIcon icon={faHeart} saved={saved.toString()} />
      </S.Button>
      {/* )} */}
    </S.Container>
  );
};

const mapStateToProps = (state) => {
  if (state.fetchUserData) {
    return {
      user: state.fetchCurrentUser,
    };
  } else {
    return {};
  }
};

export default connect(mapStateToProps)(SaveMovie);
