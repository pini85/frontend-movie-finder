import styled from 'styled-components/macro';

export const Container = styled.div`
  position: relative;
  height: fit-content;
  margin: 4rem;
  color: ${({ fontColor }) => fontColor};
  @media screen and (max-width: 800px) {
    width: auto;
  }
  @media screen and (max-width: 500px) {
    margin: 0;
    margin-top: 3rem;
  }

  &:before {
    content: '';
    position: absolute;
    left: 41px;
    top: 19%;
    height: 64.5%;
    width: 1px;
    background: ${({ borderColor }) => borderColor};
  }
  &:after {
    content: '';
    position: absolute;
    right: 41px;
    top: 19%;
    height: 64.5%;
    width: 1px;
    background: ${({ borderColor }) => borderColor};
  }
`;
