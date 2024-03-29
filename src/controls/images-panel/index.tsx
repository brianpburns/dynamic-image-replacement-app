import React from 'react';
import { ControlPanelProps } from 'unbounce-smart-builder-sdk-types';

import { DataStructure } from '../../types';
import { FieldsWrapper, StyledWrapper } from '../styled';
import { AltText } from './alt-text';
import { ImagePreview } from './image-preview';
import { QueryParamOption } from './query-param-option';

export const ImagesPanel = ({
  data: { options, defaultSrc, defaultAlt, numOptions },
  dispatch,
}: ControlPanelProps<DataStructure>) => {
  const onSrcChange = (newSrc: string | null) => {
    dispatch((api) => {
      api.get('defaultSrc').set(newSrc || '');
    });
  };

  const onAltChange = (newAlt: string) => {
    dispatch((api) => {
      api.get('defaultAlt').set(newAlt);
    });
  };

  return (
    <>
      <FieldsWrapper separator={false}>
        <h2>Default Image</h2>
        <StyledWrapper>
          <ImagePreview imagePreview={defaultSrc} onChange={onSrcChange} />
        </StyledWrapper>
        <AltText value={defaultAlt} onBlur={onAltChange} />
      </FieldsWrapper>
      {options.map(
        (option, index) =>
          index < numOptions && <QueryParamOption key={index} index={index} option={option} dispatch={dispatch} />,
      )}
    </>
  );
};
