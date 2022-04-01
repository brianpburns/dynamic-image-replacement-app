import type ReactType from 'react';
import type ReactDomType from 'react-dom';
import type SmartBuilderSdkType from 'smart-builder-sdk';
import type StyledType from 'styled-components';

declare global {
  interface Window {
    react: typeof ReactType;
    reactDom: typeof ReactDomType;
    smartBuilderSdk: typeof SmartBuilderSdkType;
    styled: typeof StyledType;
  }
}
