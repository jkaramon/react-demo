export const APP_INIT_SAGA = 'APP/APP-INIT-SAGA';
export const APP_INIT_COMPLETE = 'APP/APP-INIT-COMPLETE';
export const APP_INIT_STARTED = 'APP/APP-INIT-STARTED';

export function appInitSaga() {
  return { type: APP_INIT_SAGA };
}

const initialState = {
  initialized: false,
  showAppError: false,
  lastErrorMessage: null,
  apiHost: null,
  currentUser: null
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case APP_INIT_COMPLETE: {
      return {
        ...state,
        initialized: true,
        apiHost: action.appSettings && action.appSettings.apiHost
      };
    }
    default: {
      return state;
    }
  }
}
