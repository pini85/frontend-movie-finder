import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import ScrollIntoView from './components/ScrollIntoView.component';
import RouteConfig from './routes/RouteConfig';

const App = () => {
  const theme = useSelector((state) => state.ui.theme);

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

export default App;
