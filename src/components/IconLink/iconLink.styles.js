import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const Container = styled.div`
  margin: 0 2rem;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.5);
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 3.5rem !important;
  height: 3.5rem;
  & .svg {
    height: 3.5rem;
    width: 3.5rem;
  }

  color: red;
  cursor: pointer;
`;
