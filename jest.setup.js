require('whatwg-fetch');

window['smartBuilderSdk'] = {
  useApiRequest: () => ({}),
  SdkProvider: ({children}) => <>{children}</>,
  OAuthProvider: ({children}) => <>{children}</>,
  useOAuthContext: () => ({}),
  useAppOauth: () => ({}),
  getAfterFormSubmitScript: () => '',
  createUIEventTracking: () => ({}),
  usePaginateResults: () => ({}),
  useImageGalleryContext: () => ({}),
  Script: () => <></>,
  WithControls: (component) => component,
  WithStyles: (component) => component,
  ControlButton: () => <></>,
  useImageGallery: () => ({}),
};

jest.setTimeout(3000); // Can increase as required
