import styled, { css } from 'styled-components/macro';

export const DisplayContainer = styled.div`
  ${({ dvd, isMobile }) => {
    if (dvd && isMobile) {
      return css`
        transform: translate(0%, -33%) scale(0.25);
      `;
    }
    if (dvd && !isMobile) {
      return css`
        transform: translate(0%, -20%) scale(0.5);
      `;
    }
  }}
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-top: 5rem;
  margin-left: 2rem;
  ${({ option }) => {
    if (option === 'bouncing dvd') {
      return css`
        position: absolute;
        left: 50%;
        bottom: 35px;
        transform: translate(-50%, 50%);
      `;
    }
  }}
`;

export const ThemeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;
export const ThemeTitle = styled.h3`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 3rem;
`;
export const ThemeDescription = styled.p`
  text-align: center;
  background: ${({ color }) => color};
`;
export const ColorBox = styled.div`
  height: 10rem;
  width: 20rem;

  background: ${({ type }) =>
    type === 'primary' ? 'var( --primary-color)' : 'var( --secondary-color)'};
`;
