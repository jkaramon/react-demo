// @flow
import React from 'react';
import styled from 'styled-components';

import { colors } from '../themes';

import type { ReduxUser } from '../types/entities';
import { UserDialogAnchor } from './user-dialog-anchor';
import { UserForm } from './user-form';

export const Container = styled.section`
  margin: 6px;
  color: ${colors.white};
  background-color: ${colors.primary};
  border: 2px solid ${colors.grayLighter};
  border-radius: 9px;
`;
export const Header = styled.section`
  text-align: center;
  padding: 6px;
  background-color: ${colors.primaryLightest};
  color: ${colors.grayDarker};
`;
const Details = styled.section`
  line-height: 20px;
  padding: 6px;
`;

const Row = styled.p`
  text-align: center;
`;

type Props = {
  user: ReduxUser
};

export function UserCard(props: Props) {
  const { user } = props;
  return (
    <Container>
      <UserDialogAnchor
        renderDialog={hideModal => (
          <UserForm hideModal={hideModal} user={user} />
        )}
      >
        <Header>{user.name}</Header>
        <Details>
          <Row>{user.email}</Row>
          <Row>{user.addressCity}</Row>
          <Row>{user.phone}</Row>
          <Row>{user.website}</Row>
          <Row>{user.companyName}</Row>
        </Details>
      </UserDialogAnchor>
    </Container>
  );
}
