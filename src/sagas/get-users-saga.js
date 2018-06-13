import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_USERS_START, GET_USERS_SUCCESS } from 'reducers/user';
import { getUsers } from '../api/user-api';
import type { APIUser } from '../types/entities';

function* getUsersHandler() {
  const apiUsers: Array<APIUser> = yield call(getUsers);
  const users = apiUsers.map((u: APIUser) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    addressCity: u.address.city,
    phone: u.phone,
    website: u.website,
    companyName: u.company.name
  }));
  yield put({ type: GET_USERS_SUCCESS, payload: users });
}

export function* getUsersSaga() {
  yield takeLatest(GET_USERS_START, getUsersHandler);
}
