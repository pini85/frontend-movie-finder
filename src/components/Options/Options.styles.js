import styled from 'styled-components/macro';

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0 5rem 0;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
