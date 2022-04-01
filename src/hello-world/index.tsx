import React from 'react';
import { component, Schema } from 'ub-shared';

import HelloWorld from './components/hello-world';
import { migrations } from './migrations';

const schema = Schema.object({
  firstName: Schema.string().noControls(),
  lastName: Schema.string().groupControls({
    icon: <span>LN</span>,
    label: 'Last Name',
  }),
  styles: Schema.newStyle({
    textAlign: {
      layoutSpecific: true,
    },
  }),
});

export const Component = component({
  componentTypeId: 'helloWorld', // This is the id for your component in our system, must be camelCase. It is used to reference the component in places like templates
  displayName: 'HelloWorld',
  tags: ['newControls', 'swappable'],
  schema,
  Component: HelloWorld,
  version: migrations.length,
  migrations,
});
