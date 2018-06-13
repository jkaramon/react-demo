// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import type { ReduxUser } from '../types/entities';
import { InputField } from './input-field';
import { colors } from '../themes';
import { updateUserAction } from '../reducers/user';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Fields = styled.section`
  width: 200px;
`;
const Actions = styled.section`
  width: 200px;
  display: flex;
  flex-direction: row-reverse;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  border: none;
  padding: 9px;
`;

const PrimaryButton = styled.button`
  cursor: pointer;
  font-size: 14px;
  border: none;
  padding: 9px;
  background-color: ${colors.primary};
  color: ${colors.primaryLightest};
`;

type Props = {
  user: ReduxUser,
  updateUser: (user: ReduxUser) => void,
  hideModal: () => void
};

type State = {
  ...ReduxUser
};

export class UserFormPanel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    if (props.user) {
      this.state = props.user;
    } else {
      this.state = {};
    }
    this.state.isValid = true;
  }

  fieldChanged = (name: string, e: any) => {
    this.setState({ [name]: e.target.value });
  };
  submit = () => {
    this.props.updateUser(this.state);
    this.props.hideModal();
  };
  render() {
    const { props, state } = this;
    const { hideModal } = props;
    return (
      <Container>
        <Fields>
          <InputField
            value={state.name}
            onChange={e => this.fieldChanged('name', e)}
            label="Name"
          />
          <InputField
            value={state.email}
            onChange={e => this.fieldChanged('email', e)}
            label="Email"
          />
          <InputField
            value={state.addressCity}
            onChange={e => this.fieldChanged('addressCity', e)}
            label="City"
          />
          <InputField
            value={state.phone}
            onChange={e => this.fieldChanged('phone', e)}
            label="Phone"
          />
          <InputField
            value={state.website}
            onChange={e => this.fieldChanged('website', e)}
            label="website"
          />
          <InputField
            value={state.companyName}
            onChange={e => this.fieldChanged('companyName', e)}
            label="Company Name"
          />
        </Fields>
        <Actions>
          <PrimaryButton onClick={this.submit}>Update</PrimaryButton>
          <Button onClick={hideModal}>Close</Button>
        </Actions>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: userData => dispatch(updateUserAction(userData))
  };
}

export const UserForm = connect(
  null,
  mapDispatchToProps
)(UserFormPanel);
