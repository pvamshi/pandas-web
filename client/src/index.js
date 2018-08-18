import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// import { routes } from './routes';
// import { ConnectedRouter } from 'connected-react-router';
import './assets/styles/style';
import Home from './components/Home';
// render the main component
ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app'),
);

{
  /* <ConnectedRouter history={history}>{routes}</ConnectedRouter> */
}
// using JSX:
