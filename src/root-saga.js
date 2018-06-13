import { fork } from 'redux-saga/effects';

import { appInitSaga } from 'sagas/app-init-saga';
import { getUsersSaga } from 'sagas/get-users-saga';
import { updateUserSaga } from 'sagas/update-user-saga';

export default function* rootSaga() {
  try {
    yield fork(appInitSaga);
    yield fork(getUsersSaga);
    yield fork(updateUserSaga);
  } catch (e) {
    // log exceptions
    throw e;
  }
}
