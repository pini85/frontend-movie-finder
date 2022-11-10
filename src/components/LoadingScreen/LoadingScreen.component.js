import React from 'react';
import { connect } from 'react-redux';
import BouncingDvd from 'components/Spinners/BouncingDvd/BouncingDvd.component';
import Film from 'components/Spinners/Film/Film.component';
import Spin from 'components/Spinners/Spin/Spin.component';
import useWidth from '../../hooks/useWidth.hooks';
import { Container } from './LoadingScreen.styles';
const LoadingScreen = ({ spinner }) => {
  const width = useWidth().width;
  const isMobile = width < 600;

  const showOption = () => {
    switch (spinner) {
      case 'bouncing dvd':
        return <BouncingDvd></BouncingDvd>;
      case 'camera':
        return <Film></Film>;
      case 'spin':
        return <Spin></Spin>;
      default:
        console.log('error', spinner);
    }
  };
  return (
    <Container isMobile={isMobile} dvd={spinner === 'bouncing dvd'}>
      {' '}
      {showOption()}
    </Container>
  );
};
const mapStateToProps = (state) => ({
  spinner: state.displaySpinner,
});
export default connect(mapStateToProps, null)(LoadingScreen);
