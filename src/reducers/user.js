// @flow
import * as R from 'ramda';
import type { Action } from '../types/action';
import type { ReduxUser } from '../types/entities';

export const GET_USERS_START = 'USERS/GET_USERS_START';
export const GET_USERS_SUCCESS = 'USERS/GET_USERS_SUCCESS';

export const UPDATE_USER_START = 'USERS/UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'USERS/UPDATE_USER_SUCCESS';

export function getUsersAction() {
  return { type: GET_USERS_START };
}

export function updateUserAction(user: ReduxUser) {
  return { type: UPDATE_USER_START, payload: user };
}

type UserState = {
  users: Array<ReduxUser>
};

const initialState: UserState = {
  users: []
};

// Reducer
export default function reducer(
  state: UserState = initialState,
  action: Action = {}
) {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return { ...state, users: action.payload };
    }
    case UPDATE_USER_SUCCESS: {
      const user: ReduxUser = action.payload;
      const userIdx = R.findIndex(R.propEq('id', user.id))(state.users);
      if (userIdx === -1) {
        return state;
      }
      const users = R.update(userIdx, user)(state.users);
      return { ...state, users };
    }
    default: {
      return state;
    }
  }
}
