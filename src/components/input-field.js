// @flow
import React from 'react';
import styled from 'styled-components';
import { colors } from '../themes';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  width: 100%;
`;
const Label = styled.label`
  margin-bottom: 3px;
  color: ${colors.gray};
`;
const Input = styled.input`
  font-size: 14px;
  border: 1px solid ${colors.gray};
  border-radius: 6px;
  padding: 3px 6px;
  width: 100%;
`;

type Props = {
  label: string,
  value: string,
  onChange: (e: {}) => void
};

export function InputField(props: Props) {
  const { label, value, onChange } = props;
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input type="text" value={value} onChange={onChange} />
    </Wrapper>
  );
}
