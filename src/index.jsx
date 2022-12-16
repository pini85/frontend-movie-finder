import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import queryConfig from './services/reactQuery/config.js';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
// import './index.css';
import './themes/themes.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import App from './App';
import { GlobalStyle } from './globalStyles.styles';
const queryClient = new QueryClient(queryConfig);

// !enable mocking service worker in development
// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./test/server/browser');
//   worker.start();
//   worker.printHandlers();
// }
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
if (process.env.NODE_ENV === 'production') {
  console.log = function () {};
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
