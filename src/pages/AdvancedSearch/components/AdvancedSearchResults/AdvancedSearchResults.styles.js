import styled from 'styled-components/macro';
export const Container = styled.div`
  margin-top: 5rem;
  width: 50%;
  color: var(--primary-color);

  font-size: 2rem;
  text-align: center;
  padding: 0 5rem;
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
export const Title = styled.div`
  display: inline-block;
  position: relative;
  color: var(--text-white);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    height: 2px;
    width: 95%;
    background: white;
    transform: translate(-50%, -50%);
  }
`;

export const ResultWrapper = styled.div``;
export const ResultSpan = styled.span`
  display: inline-block;
  margin-left: 5px;
  color: var(--text-white);

  &::first-letter {
    text-transform: uppercase;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
