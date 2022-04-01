import React, { useState } from 'react';

import { Modal, CloseButton, Overlay } from '../styled';
import { Props } from '../types';

export const ChangeFirstNameModal = ({ firstName, onUpdate, onClose }: Props) => {
  const [localFirstName, setLocalFirstName] = useState(firstName);
  return (
    <>
      <Modal>
        <CloseButton onClick={onClose}>x</CloseButton>
        <label>
          <strong>First Name:</strong>
          <br />
          <input
            type="text"
            data-testid="hello-world-first-name-input"
            value={localFirstName}
            onChange={({ currentTarget: { value } }) => setLocalFirstName(value)}
          />
        </label>
        <br />
        <button data-testid="hello-world-save-btn" onClick={() => onUpdate(localFirstName)}>
          Save
        </button>
      </Modal>
      <Overlay />
    </>
  );
};
