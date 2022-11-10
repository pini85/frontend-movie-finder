import styled from 'styled-components/macro';
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  padding: 0 3rem;
  top: 0px;
  box-shadow: rgb(0 0 0 / 16%) 0px 6px 20px;
  background: var(--secondary-color-light);
  height: 7vh;
  padding: 3rem;
  z-index: 5;
  transition: background 0.5s ease 0s;
`;
