import { component, Schema } from 'ub-shared';

import DynamicImageReplacement from './components/dynamic-image-replacement';
import { migrations } from './migrations';

const schema = Schema.object({
  queryParam: Schema.string(),
  numOptions: Schema.number().default(1),
  defaultSrc: Schema.string().default(
    'https://user-assets-unbounce-com.s3.amazonaws.com/bb365067-415a-4ea4-ab60-9a8543ed09a5/805bfb1a-9d37-438b-b11e-269d5e3def17/575x375.original.jpg',
  ),
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
})
  .extendMutate((data: any) => {
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
  })
  .noControls();

export const Component = component({
  componentTypeId: 'dynamicImageReplacement',
  displayName: 'Dynamic Image Replacement',
  tags: ['newControls', 'swappable'],
  schema,
  Component: DynamicImageReplacement,
  version: migrations.length,
  migrations,
});
