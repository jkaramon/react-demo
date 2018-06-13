import { combineReducers } from 'redux';
import appReducer from 'reducers/app';
import userReducer from 'reducers/user';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  routing: routerReducer
});

export default rootReducer;
