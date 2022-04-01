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
