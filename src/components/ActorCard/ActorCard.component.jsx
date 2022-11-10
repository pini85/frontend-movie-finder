import React from 'react';
import { useQuery } from 'react-query';
import { tmdbCastId } from 'apis/tmdbApi';
import {
  Container,
  CardContainer,
  ImageContainer,
  DetailContainer,
  Img,
  Title,
} from './ActorCard.styles';
const ActorCard = ({ actor, handleClick }) => {
  const { data } = useQuery(actor, () => tmdbCastId(actor));
  console.log({ data });
  const profileImg = data?.results[0].profile_path;

  return data ? (
    <Container onClick={() => handleClick(actor)}>
      <CardContainer>
        <ImageContainer>
          <Img
            src={`https://image.tmdb.org/t/p/w185//${profileImg}`}
            alt={actor?.name ?? 'actor'}
          />
        </ImageContainer>

        <DetailContainer>
          <Title>{actor}</Title>
        </DetailContainer>
      </CardContainer>
    </Container>
  ) : null;
};
export default ActorCard;
