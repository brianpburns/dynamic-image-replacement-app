import React, { useState } from 'react';
import { Label } from 'smart-builder-components';
import { DataStructure, Option } from 'src/types';
import { ControlPanelProps } from 'unbounce-smart-builder-sdk-types';

import { QuestionMark } from '../icons';
import { StyledInputField, Error, ColouredSpan, LabelWrapper, StyledTooltip } from '../styled';
import { FieldsWrapper, StyledWrapper } from '../styled';
import { isValidParam } from '../utils/is-valid-param';
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
  const [error, setError] = useState(!isValidParam(queryStringValue));

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
    if (isValidParam(tempValue)) {
      dispatch((api: any) => {
        api.updateQueryString(tempValue, index);
      });
    }
  };

  const onChange = (newValue: string) => {
    setTempValue(newValue);
    setError(!isValidParam(newValue));
  };

  return (
    <FieldsWrapper separator={true} key={index}>
      <h2>Option #{index + 2}</h2>
      <StyledWrapper>
        <ImagePreview imagePreview={src} onChange={onSrcChange} />
      </StyledWrapper>
      <LabelWrapper>
        <Label>Query Parameter Value</Label>
        <StyledTooltip xAlign="left" yAlign="top" trigger={<QuestionMark />}>
          <ColouredSpan color="#EDEDED">landing page url</ColouredSpan>?
          <ColouredSpan color="#FFCE00">parameter</ColouredSpan>=<ColouredSpan color="#27CC8D">value</ColouredSpan>
        </StyledTooltip>
      </LabelWrapper>
      <StyledInputField
        data-testid="query-param-value-input"
        value={tempValue}
        onChange={(e) => onChange(e.currentTarget.value)}
        onBlur={onQueryStringChange}
        placeholder="value"
      />
      {error && (
        <Error>
          {"Only include the query parameter value, which comes after '='. Do not include '?', '&', or '='"}
        </Error>
      )}
      <AltText value={alt} onBlur={onAltChange} />
    </FieldsWrapper>
  );
};
