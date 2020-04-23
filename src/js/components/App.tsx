import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Game } from './Game';
import { reducer } from './../reducer';

const store = createStore(reducer);

export const App = () => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
};
