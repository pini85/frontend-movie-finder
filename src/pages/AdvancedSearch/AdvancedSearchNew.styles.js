import styled from 'styled-components/macro';
export const Container = styled.div``;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-white);
  margin-bottom: 3rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: visible;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  @media screen and (max-width: 700px) {
    display: flex;
  }
`;

export const SelectorContainer = styled.div`
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    & input[type='select'] {
      width: 100%;
    }
    & label selector {
      width: 100%;
    }
  }
`;

export const BottomSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Divider = styled.div`
  margin-top: 5rem;
  display: inline-block;
  height: 33rem;
  width: 2px;
  background: var(--text-white);
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const AdvancedSearchResultContainer = styled.div`
  display: flex;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
