import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { Mode } from 'unbounce-smart-builder-sdk-types';

import { DataStructure, Option } from '../../types';

export const useQueryString = (data: DataStructure, mode: Mode) => {
  const { queryParam, options, defaultSrc, defaultAlt } = data;
  const [option, setOption] = useState<Option | null>();
  const params = queryString.parse(location.search);

  useEffect(() => {
    if (mode.type === 'edit') {
      setOption(null);
    } else if (params[queryParam]) {
      const matchingOption = options.find((img) => img.queryStringValue === params[queryParam]);
      if (matchingOption) {
        setOption(matchingOption);
      }
    }
  }, [mode.type, options, params, queryParam]);

  return { option: option || { src: defaultSrc, alt: defaultAlt } };
};
