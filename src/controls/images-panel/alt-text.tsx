import React, { SyntheticEvent, useState } from 'react';
import { Label, TextArea } from 'smart-builder-components';

export const AltText = ({ value, onBlur }: { value: string; onBlur: (val: string) => void }) => {
  const [state, setState] = useState(value ?? '');

  return (
    <>
      <Label htmlFor="alt-text">Alt Text</Label>
      <TextArea
        value={state}
        onBlur={() => onBlur(state)}
        onChange={(e: SyntheticEvent<HTMLTextAreaElement>) => setState(e.currentTarget.value)}
        height={'64px'}
      />
    </>
  );
};
