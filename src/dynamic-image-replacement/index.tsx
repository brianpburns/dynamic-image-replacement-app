import { component, Schema } from 'ub-shared';

import DynamicImageReplacement from './components/dynamic-image-replacement';
import { migrations } from './migrations';

const schema = Schema.object({
  defaultImage: Schema.object({
    src: Schema.string(),
    alt: Schema.string(),
  }),
  queryParam: Schema.string(),
  images: Schema.array(
    Schema.object({
      src: Schema.string(),
      alt: Schema.string(),
      queryStringValue: Schema.string(),
    }),
  ),
})
  .extendMutate((data: any) => {
    return {
      updateDefaultSrc(next: string) {
        data.get('defaultImage').get('src').set(next);
      },
      updateDefaultAlt(next: string) {
        data.get('defaultImage').get('alt').set(next);
      },
      updateImageSrc(next: string, index: number) {
        data.get('images').get(index).get('src').set(next);
      },
      updateImageAlt(next: string, index: number) {
        data.get('images').get(index).get('alt').set(next);
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
