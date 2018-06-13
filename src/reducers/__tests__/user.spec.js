import reducer, { GET_USERS_SUCCESS } from "../user";

describe('reducers/user', () => {
  it('should return correct initial state', () => {
    const state = reducer();
    expect(state).toEqual({
      users: []
    });
  });

  it('should set users', () => {
    const initialState = reducer();
    const state = reducer(initialState, {
      type: GET_USERS_SUCCESS,
      payload: [{ id: 1, name: 'Joe Doe' }]
    });
    expect(state).toEqual({
      users: [{ id: 1, name: 'Joe Doe' }]
    });
  });
});
