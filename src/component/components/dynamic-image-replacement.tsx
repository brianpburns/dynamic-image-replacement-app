import React from 'react';
import { ControlButton, WithControls } from 'smart-builder-sdk';
import { ComponentProps, WithStylesProps } from 'unbounce-smart-builder-sdk-types';

import { DesignPanel, SettingsPanel } from '../../controls';
import { DataStructure } from '../../types';
import { useQueryString } from '../hooks/use-query-string';
import { ImagesIcon, CogIcon } from '../icons';
import { Image, ImageContainer } from '../styled';
import { placeholderImageSrc } from '../utils/placeholder-image-src';
import { generateScript } from '../utils/script';

const DynamicImageReplacement = ({
  entityId,
  data,
  className,
  isControlShown,
  mode,
}: ComponentProps<DataStructure, WithStylesProps>) => {
  const { defaultSrc } = data;
  const { option } = useQueryString(data, mode);

  return (
    <>
      <ImageContainer hasImage={!!defaultSrc} isControlShown={isControlShown}>
        <Image
          id={entityId}
          data-testid="image"
          src={option.src || placeholderImageSrc}
          alt={option.alt}
          className={className}
        />
      </ImageContainer>
      <script
        dangerouslySetInnerHTML={{
          __html: generateScript(entityId, data),
        }}
      />
    </>
  );
};

const imagesLabel = 'Images';
const settingsLabel = 'Settings';

export default WithControls(DynamicImageReplacement, [
  {
    id: 'settings',
    label: settingsLabel,
    Button: (props) => (
      <ControlButton label={settingsLabel} active={false} {...props}>
        <CogIcon />
      </ControlButton>
    ),
    Panel: SettingsPanel,
  },
  {
    id: 'design',
    label: imagesLabel,
    Button: (props) => (
      <ControlButton label={imagesLabel} active={false} {...props}>
        <ImagesIcon />
      </ControlButton>
    ),
    Panel: DesignPanel,
  },
]);
