import { InputField, Tooltip } from 'smart-builder-components';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin-bottom: 16px;
`;

export const ImagePreviewContainer = styled.div<{
  imagePreview: string | null;
}>`
  width: 100%;
  height: 145px;
  ${({ imagePreview }) => imagePreview && `background-image: ${imagePreview};`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  .image-overlay {
    background-color: ${({ imagePreview }) => (imagePreview !== null ? '#404040' : '#aaaaaa')};
    ${({ imagePreview }) => (imagePreview !== null ? 'opacity: 0.5;' : 'opacity: 0')};
    display: grid;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const ImgControls = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 32px;
  justify-content: end;
  z-index: 12;
`;

export const IconButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const FieldsWrapper = styled.div<{ separator: boolean }>`
  ${({ separator }) =>
    separator &&
    `
      padding-top: 10px;
      margin-top 10px;
      border-top: 1px solid #aaaaaa;
    `}
  h2 {
    font-size: 14px;
    font-weight: 500;
    color: #303030;
    line-height: 24px;
    margin: 0 0 8px;
    text-align: center;
  }
`;

export const StyledInputField = styled(InputField)`
  font-size: 14px;
  font-weight: 300;
  color: #606060;
  margin-bottom: 16px;
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

export const TotalOptionsWrapper = styled.div`
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

export const TotalOptions = styled.div`
  padding: 0 8px;
  text-align: center;
  line-height: 24px;
`;

export const Error = styled.p`
  color: #ff3e51;
  font-size: 14px;
  margin-top: 4px;
`;

export const LabelWrapper = styled.div`
  display: flex;
`;

export const StyledTooltip = styled(Tooltip)`
  z-index: 13;
  margin-left: 5px;

  div[class^='popout-container'] {
    font-family: Source Sans Pro, system-ui, sans-serif;
    font-weight: 600;
    font-size: 12px;
    color: #f9f8f7;
    line-height: 16px;
    display: flex;
  }
`;
