import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  ${({ dvd, isMobile }) => {
    if (dvd && isMobile) {
      return css`
        transform: translate(0%, -33%) scale(0.25);
      `;
    } else if (dvd && !isMobile) {
      return css`
        transform: translate(0%, -17%) scale(0.5);
      `;
    }
  }}

  display: flex;
  justify-content: center;
  align-items: center;

  /* position: absolute; */
  /* background:red; */
  /* height: ${(props) => (props.dvd ? 'auto' : '28rem')};
    width:  ${(props) => (props.dvd ? 'auto' : '48rem')};
    top:${(props) => (props.dvd ? '-5rem' : '25rem')};
    left: ${(props) => (props.dvd ? '-25rem' : '15rem')};
  transform: ${(props) => (props.dvd ? 'scale(0.5)' : null)}; */
  /* margin-top: ${(props) => (props.dvd ? '-12vh' : '12vh')}; */
  /* margin-left: 22rem; */
  /* background: red; */
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
`;
