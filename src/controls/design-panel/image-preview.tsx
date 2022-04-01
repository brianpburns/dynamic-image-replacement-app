import React from 'react';
import { useImageGallery } from 'smart-builder-sdk';

import { ImageTrashIcon, PlusIcon } from './icons';
import { IconButtonStyled, ImagePreviewContainer, ImgControls } from './styled';

export const imagePreviewFormatter = (imagePreview: string | null): string => {
  if (imagePreview === null || imagePreview === '') {
    return '';
  }
  return imagePreview.startsWith('url(') ? imagePreview : `url(${imagePreview})`;
};

export interface Props {
  onChange: (src: string | null) => void;
  imagePreview: string | null;
}
/**
 * Input for image uploads - opens the image gallery
 */
export const ImagePreview = ({ onChange, imagePreview }: Props) => {
  const { openImageGallery } = useImageGallery(imagePreview, onChange);

  return (
    <ImagePreviewContainer imagePreview={imagePreviewFormatter(imagePreview)} data-testid={'image-uploader'}>
      <div className="image-overlay">
        <ImgControls>
          <IconButtonStyled
            color={'#303030'}
            onClick={openImageGallery}
            data-testid="button-add-image"
            aria-label={'Upload an image'}
          >
            <PlusIcon />
          </IconButtonStyled>
          <IconButtonStyled
            color={'#303030'}
            onClick={() => onChange(null)}
            data-testid="button-remove-image"
            aria-label={'Remove image'}
          >
            <ImageTrashIcon />
          </IconButtonStyled>
        </ImgControls>
      </div>
    </ImagePreviewContainer>
  );
};
