import { InputField } from 'smart-builder-components';
import styled from 'styled-components';

export const StyledInputField = styled(InputField)`
  font-size: 14px;
  font-weight: 300;
  color: #606060;
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 16px;

  label {
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TotalImagesWrapper = styled.div`
  display: flex;
  align-items: end;
`;

export const ButtomSelector = styled.button`
  background-color: #efefef;
  border: 1px solid #efefef;
  color: #3c4043;
  cursor: pointer;
  font-size: 14px;
  height: 24px;
  line-height: 12px;
  min-width: 34px;
  text-align: center;
  &:hover {
    background-color: #c9c9c9;
    color: #202124;
  }
  &:focus {
    outline: none;
  }
`;

export const TotalImages = styled.div`
  padding: 0 8px;
  text-align: center;
  line-height: 24px;
`;
