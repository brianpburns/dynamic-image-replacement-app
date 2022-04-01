import React from 'react';
import { ControlButton, WithControls } from 'smart-builder-sdk';
import { ComponentProps, WithStylesProps } from 'unbounce-smart-builder-sdk-types';

import { BrushIcon } from '../icons';
import { Image, ImageContainer } from '../styled';
import { Panel } from './control-panel';

export type DataStructure = {
  defaultImage: { src: string; alt: string };
  queryParam: string;
  images: { src: string; alt: string; queryStringValue: string }[];
};

const DynamicImageReplacement = ({
  entityId,
  data,
  className,
  isControlShown,
}: ComponentProps<DataStructure, WithStylesProps>) => {
  const { defaultImage } = data;

  return (
    <>
      <ImageContainer hasImage={!!defaultImage.src} isControlShown={isControlShown}>
        <Image
          id={entityId}
          data-testid="image"
          // src={data.transformedSrc || data.src}
          src={defaultImage.src}
          alt={defaultImage.alt}
          className={className}
        />
      </ImageContainer>
      <script />
    </>
  );
};

const label = 'Design';

export default WithControls(DynamicImageReplacement, [
  {
    id: 'design',
    label: label,
    Button: (props) => (
      <ControlButton label={label} active={false} {...props}>
        <BrushIcon />
      </ControlButton>
    ),
    Panel,
  },
]);
