import React, { useState } from 'react';

import Modal from 'components/Modal/Modal.component';
import ShowTorrents from 'components/ShowTorrents/ShowTorrents.component';
import ShowSubtitles from 'components/ShowSubtitles/ShowSubtitles.component';
import ShowMagnets from 'components/ShowMagnets/ShowMagnets.component';
import { Container, ModalContainer } from './showMovieOption.styles';

const ShowMovieOption = ({ colors, title, type }) => {
  const [isToggled, setToggled] = useState(false);

  const showOption = () => {
    switch (type) {
      case 'torrent':
        return <ShowTorrents></ShowTorrents>;
      case 'sub':
        return <ShowSubtitles></ShowSubtitles>;
      case 'magnets':
        return <ShowMagnets></ShowMagnets>;
      default:
        return null;
    }
  };
  const handleClick = () => {
    setToggled(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Container onClick={handleClick} textLight={colors.lightVibrant}>
        <div>{title}</div>
      </Container>

      {isToggled && (
        <Modal isToggled={isToggled} setToggled={setToggled}>
          <ModalContainer>{isToggled && showOption()}</ModalContainer>
        </Modal>
      )}
    </>
  );
};

export default ShowMovieOption;
