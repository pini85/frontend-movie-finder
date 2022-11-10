import styled from 'styled-components/macro';

export const CreateInputContainer = styled.div`
  position: relative;
  display: flex;
  margin: 5rem 0;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
export const Container = styled.div`
  position: relative;
`;
export const Wrapper = styled.div`
  position: absolute;
`;

export const InputWrapper = styled.div`
  display: flex;
`;
export const SuggestionContainer = styled.div`
  position: absolute;
  margin-top: 4rem;
  width: 100%;
`;
