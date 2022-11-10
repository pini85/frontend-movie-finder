import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  color: white;
  z-index: 1;
  cursor: pointer;
`;
export const Button = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: ${({ saved }) => (saved === 'true' ? 'red' : 'white')};
`;
