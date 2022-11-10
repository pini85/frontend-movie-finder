import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: sticky;
  z-index: 3;
  top: ${({ headerHeight }) => `${headerHeight}px`};
  justify-content: center;
  background: var(--secondary-color);
`;
export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  font-size: 1.7rem;
  background:${({ isActive }) =>
    isActive ? 'var(--secondary-color-lightest)' : 'var(--secondary-color-light)'};
  color: var(--text-white);
  padding: 3px 8px;
  border: 1px solid var(--secondary-color-lightest);
  transition: all 0.3s;
  font-weight:${({ isActive }) => (isActive ? '700' : null)}
  &:hover {
    /* background: var(--secondary-color-lightest);
    color: var(--text-dark); */
  }
  &:focus {
    outline: 0 !important;
  }
`;

export const Arrow = styled.div`
  padding: ${({ direction }) =>
    direction === 'right' ? '0px 3px 0px 0px' : '0px 0px 0px 3px'};
`;
