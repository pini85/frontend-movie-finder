import styled from 'styled-components/macro';

export const Container = styled.div`
  position: absolute;
  top: 22px;
  left: -61px;
  background: var(--secondary-color);
  border: 2px solid var(--primary-color);
  border-bottom-right-radius: 10px;
`;

export const SearchContainer = styled.div`
  display: flex;
  position: relative;
  padding: 1.5rem 2rem;
  width: max-content;
`;

export const CustomizeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Options = styled.ul`
  padding: 1.5rem 3rem 3rem 3rem;
`;

export const Option = styled.li`
  text-transform: capitalize;
  padding: 0.2rem 0;
  color: var(--text-white);
  font-size: 2rem;
  transition: all 0.3s;
  &:hover {
    color: var(--primary-color);
  }
`;
