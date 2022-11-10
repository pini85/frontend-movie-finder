import React from 'react';
import { connect } from 'react-redux';
import { Container, Img } from './CastSuggestion.styles';
const CastSuggestion = ({ name, cb, focus }) => {
  const handleClick = (e) => {
    cb(e.target.innerText);
    // e.target.blur();
    // focus(false);
  };
  return (
    <Container onClick={handleClick}>
      <div> {name}</div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  castSuggestion: state.castSuggestion,
});
export default connect(mapStateToProps)(CastSuggestion);
