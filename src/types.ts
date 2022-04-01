export type DataStructure = {
  defaultImage: { src: string; alt: string };
  queryParam: string;
  numOptions: number;
  images: { src: string; alt: string; queryStringValue: string }[];
};
