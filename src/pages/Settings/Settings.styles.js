import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* width: fit-content; */
  color: var(--text-white);
  font-size: 2.5rem;
  cursor: pointer;
  margin: 2rem 2rem;
`;

export const FlexContainer = styled.div`
  width: 180px;
`;

export const List = styled.ul``;
export const OptionTitle = styled.div`
  text-transform: capitalize;
  margin: 1rem 0;
`;

export const OptionContainer = styled.div`
  text-transform: capitalize;
  min-width: 17rem;
  font-size: 2rem;
  padding: 0.5rem 1rem;

  margin-left: 1rem;
  color: ${(props) =>
    props.active === true ? 'var(--primary-color)' : 'var(--white-text)'};
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s;
  border: ${(props) =>
    props.active === true ? '2px solid var(--primary-color)' : '2px solid transparent'};
  &:hover {
    color: var(--primary-color);
  }
  &:last-child {
    margin-bottom: 2.5rem;
  }
`;

export const IconContainer = styled.div`
  cursor: pointer;
  font-size: 3rem;
  color: var(--primary-color);
  margin: 0 2rem;
  transition: all 0.5s;
  &:hover {
    transform: rotate(180deg) scale(1.3);
  }
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
