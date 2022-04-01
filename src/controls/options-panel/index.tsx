import React, { useState } from 'react';
import { Label } from 'smart-builder-components';
import { ControlPanelProps } from 'unbounce-smart-builder-sdk-types';

import { DataStructure } from '../../types';
import { ButtomSelector, Container, StyledInputField, TotalImages, TotalImagesWrapper } from './styled';

export const OptionsPanel = ({
  data: { queryParam, numOptions, images },
  dispatch,
}: ControlPanelProps<DataStructure>) => {
  const [tempParam, setTempParam] = useState(queryParam);

  const updateQueryParam = () => {
    dispatch((api) => api.get('queryParam').set(tempParam));
  };

  const addOption = () => {
    const imagesLength = images.length;

    dispatch((api) => {
      if (imagesLength <= numOptions && imagesLength < 10) {
        // .push doesn't exist on api
        (api as any).get('images').push({ src: '', alt: '', queryStringValue: '' });
        api.get('numOptions').set(numOptions + 1);
      } else if (numOptions < 10) {
        api.get('queryParam').set(numOptions + 1);
      }
    });
  };

  const removeOption = () => {
    dispatch((api) => {
      if (numOptions > 2) {
        api.get('numOptions').set(numOptions - 1);
      }
    });
  };

  return (
    <Container data-testid="carousel-options">
      <Label>Query Parameter</Label>
      <StyledInputField
        data-testid="promo-video-input"
        value={tempParam}
        onChange={(e) => setTempParam(e.currentTarget.value)}
        onBlur={updateQueryParam}
        placeholder="https://promo.com/share/623434sdrs4365c758c76bed2"
      />
      <label htmlFor="total-imate-selector">
        Number of Options
        <TotalImagesWrapper>
          <ButtomSelector onClick={() => removeOption()}>-</ButtomSelector>
          <TotalImages>{numOptions}</TotalImages>
          <ButtomSelector onClick={() => addOption()}>+</ButtomSelector>
        </TotalImagesWrapper>
      </label>
    </Container>
  );
};
