import styled from 'styled-components/macro';

export const Container = styled.div`
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ isMobile, dvd }) => isMobile && dvd && 'scale(0.26)'};
`;
