import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { Mode } from 'unbounce-smart-builder-sdk-types';

import { DataStructure } from '../../types';

export const useQueryString = (data: DataStructure, mode: Mode) => {
  const { defaultImage, queryParam, images } = data;
  const [image, setImage] = useState(defaultImage);
  const params = queryString.parse(location.search);

  useEffect(() => {
    if (params[queryParam] && mode.type !== 'edit') {
      const matchingImage = images.find((img) => img.queryStringValue === params[queryParam]);
      if (matchingImage) setImage(matchingImage);
    }
  }, [params, queryParam, images, mode.type]);

  return { image };
};
