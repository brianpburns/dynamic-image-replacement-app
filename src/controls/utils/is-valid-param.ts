export const isValidParam = (param: string) => {
  const pattern = /[?,&,=]/;
  return !pattern.test(param);
};
