import { put, takeLatest, call } from 'redux-saga/effects';
import { UPDATE_USER_START, UPDATE_USER_SUCCESS } from 'reducers/user';
import { updateUser } from '../api/user-api';
import type { APIUser, ReduxUser } from '../types/entities';

// Map back to API shape for PATCH
function mapToAPIUser(u: ReduxUser): APIUser {
  return {
    id: u.id,
    name: u.name,
    email: u.email,
    address: { city: u.addressCity },
    phone: u.phone,
    website: u.website,
    company: { name: u.companyName }
  };
}

function* updateUserHandler(action) {
  try {
    const user = action.payload;
    // TODO: client validation - for example by using yup
    // eslint-disable-next-line no-unused-vars
    const apiResponse = yield call(updateUser, mapToAPIUser(user));
    // TODO: check response, validate, show server validation errors
    yield put({ type: UPDATE_USER_SUCCESS, payload: user });
  } catch (e) {
    // TODO: display error
  }
}

export function* updateUserSaga() {
  yield takeLatest(UPDATE_USER_START, updateUserHandler);
}
