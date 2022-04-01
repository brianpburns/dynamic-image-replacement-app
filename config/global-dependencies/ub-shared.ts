declare global {
  interface Window {
    ub: {
      component: any;
      section: any;
      Schema: any;
      registerComponent: (appBundle: any) => void;
      registerSection: (appBundle: any) => void;
      registerControl: (appControl: any) => void;
      registerHook: (appHook: any) => void;
    };
  }
}

export const { Schema, component, section, registerComponent, registerSection, registerControl, registerHook } =
  window['ub'];
export default window['ub'];
