import styled from 'styled-components/macro';
export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1050px) {
    margin-left: auto;
  }
`;
