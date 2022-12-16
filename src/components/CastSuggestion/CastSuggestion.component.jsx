import React from 'react';
import { Container } from './CastSuggestion.styles';
const CastSuggestion = ({ name, cb }) => {
  const handleClick = (e) => {
    cb(e.target.innerText);
  };
  return (
    <Container onClick={handleClick}>
      <div> {name}</div>
    </Container>
  );
};

export default CastSuggestion;
