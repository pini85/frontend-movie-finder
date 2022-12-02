import React, { useEffect } from 'react';
import axios from 'axios';
import api from './apis/api';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { fetchCurrentUser } from './redux/actions/index';

import ScrollIntoView from './components/ScrollIntoView.component';
import RouteConfig from './routes/RouteConfig';

const App = ({ theme, fetchCurrentUser }) => {
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    window.document
      .querySelector('meta[name="theme-color"]')
      .setAttribute('content', '#201021');
  }, [theme]);

  return (
    <div id="app" className={theme}>
      <Router>
        <ScrollIntoView>
          <RouteConfig />
        </ScrollIntoView>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.displayTheme,
});

export default connect(mapStateToProps, {
  fetchCurrentUser: fetchCurrentUser,
})(App);
