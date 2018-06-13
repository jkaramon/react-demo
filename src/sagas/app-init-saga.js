import { put, takeLatest } from 'redux-saga/effects';
import {
  APP_INIT_SAGA,
  APP_INIT_COMPLETE,
  APP_INIT_STARTED
} from 'reducers/app';

function* appInitHandler() {
  try {
    yield put({ type: APP_INIT_STARTED });
  } finally {
    yield put({ type: APP_INIT_COMPLETE });
  }
}

export function* appInitSaga() {
  yield takeLatest(APP_INIT_SAGA, appInitHandler);
}
