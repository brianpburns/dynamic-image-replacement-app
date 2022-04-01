import { DataStructure } from '../../types';

export const generateScript = (entityId: string, { queryParam, options }: DataStructure) => {
  return `
    const optionsArray = ${JSON.stringify(options)};
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params['${queryParam}']) {
      const matchingOption = optionsArray.find((option) => option.queryStringValue === params['${queryParam}']);

      if (matchingOption) {
        const imageElement = document.querySelector('#${entityId} img');

        imageElement.src = matchingOption.src;
        imageElement.alt = matchingOption.alt;
      }
    }
  `;
};
