/* This is the Root component mainly initializes Redux and React Router. */

import React from 'react';
import { Provider } from 'react-redux';
import store from './common/store';
import { hot, setConfig } from 'react-hot-loader';
import App from './features/home/App';

setConfig({
  logLevel: 'debug',
});

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default hot(module)(Root);
