import styled from 'styled-components/macro';

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  width: 80%;
  margin-bottom: 3rem;
  border-radius: 8px;
  padding: 2rem;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 24rem;
  margin-top: 2rem;
  width: 23rem;
`;

export const LeftDetails = styled.div`
  font-size: 1.5rem;
`;

export const RightDetails = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  margin-right: 0.5rem;
  color: orange;
`;

export const VoteAverage = styled.div`
  color: white;
  margin-left: 5px;
`;

export const ReleaseDateWrapper = styled.div``;

export const Header = styled.div`
  font-size: var(--heading - secondary);
`;

export const Plot = styled.div`
  font-size: var(--paragraph);
`;
