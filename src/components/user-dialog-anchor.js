/* eslint-disable jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
// @flow
import React from 'react';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { colors } from '../themes';

const ClickWrapper = styled.a`
  cursor: pointer;
`;

const ModalDialog = styled.div`
  z-index: 2;
  position: fixed;
  background-color: ${colors.white};
  color: ${colors.black};
  width: 320px;
  height: 430px;
  top: calc(30% - 200px);
  left: calc(50% - 160px);
  box-shadow: 5px 5px 8px ${transparentize(0.4, colors.gray)};
  border-radius: 9px;
  padding: 18px;
`;
const ModalOverlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  position: absolute;
  z-index: 1;
  background-color: ${transparentize(0.2, colors.gray)};
`;

type Props = {
  children: any,
  renderDialog: (hideModal: () => void) => any
};

type State = {
  modalVisible: boolean
};

export class UserDialogAnchor extends React.Component<Props, State> {
  state = {
    modalVisible: false
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    const { children, renderDialog } = this.props;
    const { modalVisible } = this.state;
    return (
      <div>
        <ClickWrapper onDoubleClick={this.showModal}>{children}</ClickWrapper>
        {modalVisible && (
          <ModalDialog>{renderDialog(this.hideModal)}</ModalDialog>
        )}
        {modalVisible && <ModalOverlay />}
      </div>
    );
  }
}
