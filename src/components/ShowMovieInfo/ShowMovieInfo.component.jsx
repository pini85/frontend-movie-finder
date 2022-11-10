import React from 'react';
import './styles.css';
import CirclePercentage from 'components/CirclePercentage/CirclePercentage.component';
import * as S from './showInfo.styles';

const ShowMovieInfo = ({ data }) => {
  return (
    <S.Container color={data.colors.lightVibrant}>
      <S.TitleContainer>
        {data.title} ({data.year})
      </S.TitleContainer>
      <S.GenreContainer>
        {data.genre}
        &nbsp;<span>&#124;</span>&nbsp;
        {data.runTime}min <span>&#124;</span>&nbsp;
        {data.language}
      </S.GenreContainer>

      <S.ReviewContainer color={data.colors.vibrant}>
        {data.ratings &&
          data.ratings.map((rate, i) => {
            return (
              <a key={i} href={rate.url} target="blank">
                <S.ReviewItem color={data.colors.vibrant}>
                  <S.Image src={rate.img} alt="" />
                  <S.ReviewValueContainer>
                    {rate.rating ? rate.rating.Value : rate.imdb.Value}
                  </S.ReviewValueContainer>
                </S.ReviewItem>
              </a>
            );
          })}
        <CirclePercentage rating={data.tmdbRating * 10} colors={data.colors} />
      </S.ReviewContainer>
    </S.Container>
  );
};

export default ShowMovieInfo;
