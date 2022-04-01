import styled from 'styled-components';

export const ImageContainer = styled.div<{ hasImage?: boolean; isControlShown?: boolean }>`
  overflow: hidden;
  ${({ hasImage }) => (!hasImage ? 'height: 100%;' : '')}
  visibility: ${({ isControlShown }) => (isControlShown ? 'hidden' : 'visible')};
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
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

export const StyledWrapper = styled.div`
  margin-bottom: 16px;
`;
