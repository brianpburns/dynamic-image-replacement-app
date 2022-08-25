import { component, Schema } from 'ub-shared';

import DynamicImageReplacement from './components/dynamic-image-replacement';
import { placeholderImageSrc } from './utils/placeholder-image-src';

const schema = Schema.object({
  queryParam: Schema.string(),
  numOptions: Schema.number().default(1),
  defaultSrc: Schema.string().default(placeholderImageSrc),
  defaultAlt: Schema.string(),
  options: Schema.array(
    Schema.object({
      src: Schema.string(),
      alt: Schema.string(),
      queryStringValue: Schema.string(),
    }),
  ).default([
    {
      src: '',
      alt: '',
      queryStringValue: '',
    },
  ]),
}).extendMutate((data: any) => {
  return {
    updateSrc(next: string, index: number) {
      data.get('options').get(index).get('src').set(next);
    },
    updateAlt(next: string, index: number) {
      data.get('options').get(index).get('alt').set(next);
    },
    updateQueryString(next: string, index: number) {
      data.get('options').get(index).get('queryStringValue').set(next);
    },
  };
});

export const Component = component({
  componentTypeId: 'dynamicImageReplacement',
  displayName: 'Dynamic Image Replacement',
  tags: ['newControls', 'swappable'],
  schema,
  Component: DynamicImageReplacement,
});
