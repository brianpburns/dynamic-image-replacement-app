import React from 'react';
import { ControlPanelProps } from 'unbounce-smart-builder-sdk-types';

import { DataStructure } from './hello-world';

export const Panel = ({ dispatch }: ControlPanelProps<DataStructure>) => (
  <div data-testid="custom-text-align-panel">
    Where do you want that text
    <button
      onClick={() =>
        dispatch((api) => {
          api.get('styles').set({ textAlign: 'left' });
        })
      }
      data-testid={`button-text-align-left`}
    >
      Left
    </button>
    <button
      onClick={() =>
        dispatch((api) => {
          api.get('styles').set({ textAlign: 'center' });
        })
      }
      data-testid={`button-text-align-center`}
    >
      Center
    </button>
    <button
      onClick={() =>
        dispatch((api) => {
          api.get('styles').set({ textAlign: 'right' });
        })
      }
      data-testid={`button-text-align-right`}
    >
      Right
    </button>
  </div>
);
