// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import type { ReduxUser } from '../types/entities';
import { UserCard } from '../components/user-card';

const Container = styled.section`
  display: flex;
  justify-content: center;
`;

const CardList = styled.section`
  max-width: 1024px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

type Props = {
  users: Array<ReduxUser>
};

export function UserListPage(props: Props) {
  const { users } = props;
  if (!users) {
    return null;
  }
  return (
    <Container>
      <CardList>
        {users.map(user => <UserCard key={user.id} user={user} />)}
      </CardList>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    users: state.user.users
  };
}

export const UserListPageConnected = connect(mapStateToProps)(UserListPage);
