import styled from 'styled-components/macro';

export const Container = styled.div`
  color: ${(props) => props.color};
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  text-align: center;
  height: fit-content;
  margin-top: 3rem;
  border-radius: 8px;
  padding: 2rem 4rem;
  color: ${(props) => props.color};
  @media screen and (max-width: 500px) {
    padding: 2rem 4rem 1rem 4rem;
    width: 100vw;
  }
`;

export const TitleContainer = styled.div`
  font-weight: 700;
  font-size: var(--heading-secondary);
`;

export const GenreContainer = styled.div`
  font-size: 1.7rem;
`;
export const YearContainer = styled.div`
  font-size: var(--paragraph);
`;

export const ReviewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const ReviewItem = styled.div`
  margin: 0.5rem 1rem 0rem 1rem;
  color: ${({ color }) => color};
  font-weight: 700;
  background: rgba(0, 0, 0, 0.3);
  padding: 5px;
  height: 6rem;
  width: 8rem;
  border-radius: 10px;
`;

export const Image = styled.img`
  height: 2rem;
  width: 3rem;
  filter: opacity(0.5);
`;

export const CircleRating = styled.div`
  position: relative;
  background: yellow;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  z-index: 2;
  &::before {
    position: absolute;
    content: '';
    top: 5%;
    left: 5%;
    height: 200%;
    width: 200%;
    z-index: 1;

    background: red;
  }
`;
export const ReviewValueContainer = styled.div`
  font-size: 1.5rem;
`;
