import styled from 'styled-components/macro';

export const Container = styled.div`
  height: 50rem;
  background: ${({ img }) =>
    `url(https://image.tmdb.org/t/p/w1280//${img})  no-repeat center center/cover`};
  background-size: cover;
  color: var(--text-white);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-position: center;
  background-size: cover;
`;
