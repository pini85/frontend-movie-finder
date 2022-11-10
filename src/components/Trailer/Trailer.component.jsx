import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { tmdbTrailersApi } from 'apis/tmdbApi';
import YouTube from 'react-youtube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import Modal from 'components/Modal/Modal.component';
import Carousel from 'components/Carousel/carousel.component';
import useWidth from '../../hooks/useWidth.hooks';
import * as S from './Trailer.styles';
import './youtube.css';

const Trailer = ({ poster, colors, id }) => {
  const width = useWidth().width;

  const [isToggled, setToggled] = useState(false);

  const { data: trailers, isLoading } = useQuery(
    ['trailer', id],
    () => tmdbTrailersApi(id),
    { enabled: isToggled }
  );

  const trailersYouTube = () => {
    const optsYouTube = {
      height: '450px',
      width: '450px',
      playerVars: {
        autoplay: 0,
      },
    };
    return trailers.map((trailer) => {
      return (
        <YouTube
          videoId={trailer.key}
          opts={optsYouTube}
          containerClassName="youtubeContainer"
        />
      );
    });
  };
  const handleClick = (e) => {
    setToggled(true);
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <S.TrailerContainer poster={poster}>
        <S.TrailerPlay
          color={colors.darkVibrant}
          vibrant={colors.vibrant}
          onClick={handleClick}
        />
      </S.TrailerContainer>
      {isToggled && (
        <Modal
          skew={true}
          isToggled={isToggled}
          setToggled={setToggled}
          title="trailers"
        >
          {trailers ? (
            <Carousel
              slidesToShow={1}
              slidesToScroll={1}
              autoPlay={false}
              fade={true}
              color="var(--primary-color)"
            >
              {trailersYouTube()}
            </Carousel>
          ) : (
            <FontAwesomeIcon
              icon={faFilm}
              style={{ fontSize: '10rem', color: 'red' }}
            />
          )}
        </Modal>
      )}
    </>
  );
};

export default Trailer;
