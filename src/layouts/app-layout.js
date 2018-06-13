import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { HomePage } from 'pages/home-page';
import { UserListPageConnected } from 'pages/user-list-page';
import onEnter from '../hoc/onEnter';
import { getUsersAction } from '../reducers/user';

function initUserList(dispatch) {
  dispatch(getUsersAction());
}

export function AppLayout() {
  return (
    <section>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/users"
          component={onEnter(UserListPageConnected, initUserList)}
        />
      </Switch>
    </section>
  );
}

export default withRouter(AppLayout);
