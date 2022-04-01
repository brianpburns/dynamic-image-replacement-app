export interface Option {
  src: string;
  alt: string;
  queryStringValue: string;
}

export type DataStructure = {
  queryParam: string;
  defaultSrc: string;
  defaultAlt: string;
  numOptions: number;
  options: Option[];
};
