import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user } from './redux/actions/index';
import { BrowserRouter as Router } from 'react-router-dom';

import ScrollIntoView from './components/ScrollIntoView.component';
import RouteConfig from './routes/RouteConfig';

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.displayTheme);

  useEffect(() => {
    window.document
      .querySelector('meta[name="theme-color"]')
      .setAttribute('content', '#201021');
  }, [theme]);

  useEffect(() => {
    const theUser = localStorage.getItem('user');

    if (theUser && !theUser.includes('undefined')) {
      console.log({ theUser });
      dispatch(user(JSON.parse(theUser)));
      // dispatch(user(JSON.stringify(theUser)));
    }
  }, []);

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

export default App;
