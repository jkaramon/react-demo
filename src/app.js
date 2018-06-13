/* eslint-disable import/extensions */

import 'typeface-roboto-condensed';
import 'typeface-roboto';
import 'styles/global.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, history } from 'store';
import { appInitSaga } from 'reducers/app';

import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';

import onEnter from 'hoc/onEnter';

import AppLayout from 'layouts/app-layout';

function handleAppInit(dispatch) {
  const state = store.getState();
  if (!state.app.initialized) {
    dispatch(appInitSaga());
  }
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={onEnter(AppLayout, handleAppInit)} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  window.document.getElementById('root')
);
