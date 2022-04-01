export type DataStructure = {
  defaultImage: { src: string; alt: string };
  queryParam: string;
  images: { src: string; alt: string; queryStringValue: string }[];
};
