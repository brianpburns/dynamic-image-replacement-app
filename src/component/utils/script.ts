import { DataStructure } from '../../types';

export const generateScript = (entityId: string, { queryParam, images }: DataStructure) => {
  return `
    const imagesArray = ${JSON.stringify(images)};
    console.log('images', imagesArray);
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    if (params['${queryParam}']) {
      const matchingImage = imagesArray.find((img) => img.queryStringValue === params['${queryParam}']);

      if (matchingImage) {
        const imageElement = document.querySelector('#${entityId} img');

        imageElement.src = matchingImage.src;
        imageElement.alt = matchingImage.alt;
      }
    }
  `;
};
