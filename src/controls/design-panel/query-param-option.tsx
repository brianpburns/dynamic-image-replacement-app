import React, { useState } from 'react';
import { Label } from 'smart-builder-components';
import { DataStructure, Option } from 'src/types';
import { ControlPanelProps } from 'unbounce-smart-builder-sdk-types';

import { StyledInputField } from '../styled';
import { FieldsWrapper, StyledWrapper } from '../styled';
import { AltText } from './alt-text';
import { ImagePreview } from './image-preview';

interface Props {
  option: Option;
  index: number;
  dispatch: ControlPanelProps<DataStructure>['dispatch'];
}

export const QueryParamOption = ({ option, index, dispatch }: Props) => {
  const { src, alt, queryStringValue } = option;
  const [tempValue, setTempValue] = useState(queryStringValue);

  const onSrcChange = (newSrc: string | null) => {
    dispatch((api: any) => {
      api.updateSrc(newSrc, index);
    });
  };

  const onAltChange = (newAlt: string) => {
    dispatch((api: any) => {
      api.updateAlt(newAlt, index);
    });
  };

  const onQueryStringChange = () => {
    dispatch((api: any) => {
      api.updateQueryString(tempValue, index);
    });
  };

  return (
    <FieldsWrapper separator={true} key={index}>
      <h2>Option #{index + 1}</h2>
      <StyledWrapper>
        <ImagePreview imagePreview={src} onChange={onSrcChange} />
      </StyledWrapper>
      <Label>Query Parameter Value</Label>
      <StyledInputField
        data-testid="query-param-value-input"
        value={tempValue}
        onChange={(e) => setTempValue(e.currentTarget.value)}
        onBlur={onQueryStringChange}
        placeholder="value"
      />
      <AltText value={alt} onBlur={onAltChange} />
    </FieldsWrapper>
  );
};
