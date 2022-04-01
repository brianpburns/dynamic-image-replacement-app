import React from 'react';
import { ControlPanelProps } from 'unbounce-smart-builder-sdk-types';

import { StyledWrapper } from '../styled';
import { AltText } from './alt-text';
import { DataStructure } from './dynamic-image-replacement';
import { ImagePreview } from './image-preview';

export const Panel = ({ data: { defaultImage }, dispatch }: ControlPanelProps<DataStructure>) => {
  const { src, alt } = defaultImage;

  const onSrcChange = (newSrc: string | null) => {
    dispatch((api: any) => {
      api.updateDefaultSrc(newSrc);
    });
  };

  const onAltChange = (newAlt: string) => {
    dispatch((api: any) => {
      api.updateDefaultAlt(newAlt);
    });
  };

  return (
    <>
      <h2>Image</h2>
      <StyledWrapper>
        <ImagePreview imagePreview={src} onChange={onSrcChange} />
      </StyledWrapper>
      <AltText value={alt} onBlur={onAltChange} />
    </>
  );
};
