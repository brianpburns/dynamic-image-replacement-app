import React, { useState } from 'react';
import { InputField } from 'smart-builder-components';
import styled from 'styled-components';

interface Props {
  value: number;
  onUpdate: (newVal: number) => void;
  label: string;
  placeholder?: string;
}

export const Input = ({ value, onUpdate, label, placeholder }: Props) => {
  const [localVal, setLocalVal] = useState(value);

  const onBlur = () => {
    onUpdate(localVal);
  };

  return (
    <InputWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledField
        placeholder={placeholder || ''}
        minimal
        type="number"
        value={localVal.toString() || ''}
        onChange={(e: any) => setLocalVal(e.currentTarget.value)}
        onBlur={onBlur}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: grid;
  input {
    width: '100%';
    font-size: 20px;
    margin-right: 1px;
    padding: 0;
    font-weight: 500;
    color: #303030;
    border-bottom: 1px solid #d8d8d8;
  }
`;

const StyledField = styled(InputField)`
  ::placeholder {
    color: #c9c9c9;
  }
`;

const StyledLabel = styled.p`
  margin: 0;
  font-size: 14px;
  color: #808080;
`;
