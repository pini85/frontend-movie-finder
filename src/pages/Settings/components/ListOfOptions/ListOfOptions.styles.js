import styled from 'styled-components/macro';
export const OptionContainer = styled.div`
  text-transform: capitalize;
  width: fit-content;
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
