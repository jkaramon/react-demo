import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  applyMiddleware(routerMiddleware(history))
)(createStore)(rootReducer);

const { dispatch } = store;

sagaMiddleware.run(rootSaga);

export { store, history, dispatch };
