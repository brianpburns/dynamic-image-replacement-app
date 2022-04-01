import React from 'react';
import { ControlButton, WithControls } from 'smart-builder-sdk';
import { ComponentProps, WithStylesProps } from 'unbounce-smart-builder-sdk-types';

import { DesignPanel } from '../../controls';
import { DataStructure } from '../../types';
import { useQueryString } from '../hooks/use-query-string';
import { BrushIcon } from '../icons';
import { Image, ImageContainer } from '../styled';
import { generateScript } from '../utils/script';

const DynamicImageReplacement = ({
  entityId,
  data,
  className,
  isControlShown,
  mode,
}: ComponentProps<DataStructure, WithStylesProps>) => {
  const { defaultImage } = data;
  const { image } = useQueryString(data, mode);

  return (
    <>
      <ImageContainer hasImage={!!defaultImage.src} isControlShown={isControlShown}>
        <Image
          id={entityId}
          data-testid="image"
          // src={data.transformedSrc || data.src}
          src={image.src}
          alt={image.alt}
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
    Panel: DesignPanel,
  },
]);
