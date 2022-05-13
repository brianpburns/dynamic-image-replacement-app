import React, { useState } from 'react';
import { Label } from 'smart-builder-components';
import { ControlPanelProps } from 'unbounce-smart-builder-sdk-types';

import { DataStructure } from '../../types';
import { QuestionMark } from '../icons';
import {
  ButtomSelector,
  Container,
  Error,
  LabelWrapper,
  StyledInputField,
  StyledTooltip,
  TotalOptions,
  TotalOptionsWrapper,
} from '../styled';
import { isValidParam } from '../utils/is-valid-param';

export const SettingsPanel = ({
  data: { queryParam, numOptions, options },
  dispatch,
}: ControlPanelProps<DataStructure>) => {
  const [tempParam, setTempParam] = useState(queryParam);
  const [error, setError] = useState(!isValidParam(tempParam));

  const updateQueryParam = () => {
    dispatch((api) => api.get('queryParam').set(tempParam));
  };

  const addOption = () => {
    const optionsLength = options.length;

    dispatch((api) => {
      if (optionsLength <= numOptions && optionsLength < 10) {
        // Type error for .push not existing on api
        (api as any).get('options').push({ src: '', alt: '', queryStringValue: '' });
        api.get('numOptions').set(numOptions + 1);
      } else if (numOptions < 10) {
        api.get('queryParam').set(numOptions + 1);
      }
    });
  };

  const removeOption = () => {
    dispatch((api) => {
      if (numOptions > 1) {
        api.get('numOptions').set(numOptions - 1);
      }
    });
  };

  const onQueryParamChange = (newValue: string) => {
    setTempParam(newValue);
    setError(!isValidParam(newValue));
  };

  return (
    <Container data-testid="carousel-options">
      <LabelWrapper>
        <Label>Parameter Name</Label>
        <StyledTooltip xAlign="center" yAlign="bottom" trigger={<QuestionMark />}>
          This is the name of the parameter you will add to the URL
        </StyledTooltip>
      </LabelWrapper>
      <StyledInputField
        data-testid="query-parameter-input"
        value={tempParam}
        onChange={(e) => onQueryParamChange(e.currentTarget.value)}
        onBlur={updateQueryParam}
        placeholder="parameter"
      />
      {error && (
        <Error>{"Only include the parameter name, which comes before '='. Do not include '?', '&', or '='"}</Error>
      )}
      <label htmlFor="total-imate-selector">
        Number of Images
        <TotalOptionsWrapper>
          <ButtomSelector onClick={() => removeOption()}>-</ButtomSelector>
          <TotalOptions>{numOptions + 1}</TotalOptions>
          <ButtomSelector onClick={() => addOption()}>+</ButtomSelector>
        </TotalOptionsWrapper>
      </label>
    </Container>
  );
};
