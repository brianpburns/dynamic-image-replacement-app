import React, { useState } from 'react';
import { WithControls, ControlButton, WithStyles } from 'smart-builder-sdk';
import { ComponentProps, WithStylesProps } from 'unbounce-smart-builder-sdk-types';

import { ChangeFirstNameModal } from './change-first-name-modal';
import { Panel } from './control-panel';

export type DataStructure = { firstName: string; lastName: string; styles: { textAlign: string } };

const HelloWorld = ({ data, dispatch, className }: ComponentProps<DataStructure, WithStylesProps>) => {
  const { firstName, lastName } = data;
  const [showModal, setShowModal] = useState(false);

  const updateFirstName = (newFirstName: string) => {
    dispatch((api) => api.get('firstName').set(newFirstName));
    setShowModal(false);
  };

  return (
    <>
      <div data-testid="hello-world-content" className={className}>
        Hello,{' '}
        <button data-testid="hello-world-first-name-btn" onClick={() => setShowModal(true)}>
          {firstName}
        </button>{' '}
        {lastName}
      </div>
      {showModal && (
        <ChangeFirstNameModal firstName={firstName} onUpdate={updateFirstName} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

const textAlignLabel = 'My own text align';

export default WithStyles(
  WithControls(HelloWorld, [
    'text-align', // You can pass the id of a registered control
    {
      // Or can define your own
      id: 'custom-text-align',
      label: textAlignLabel,
      Button: (props) => (
        <ControlButton label={textAlignLabel} active={false} {...props}>
          An Icon
        </ControlButton>
      ),
      Panel,
      type: 'subtoolbar',
    },
  ]),
  'styles', // The object key where styles are applied from the Schema
  'paragraph', // Optional: value from the styleguide to be applied for default styling
);
