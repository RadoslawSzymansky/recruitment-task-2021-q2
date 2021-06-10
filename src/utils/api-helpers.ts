import axios, { AxiosResponse } from 'axios';

type Params = {
  [key: string]: string | string[] | Date;
};

export const getData = async (url: string, params?: Params): Promise<AxiosResponse> => {
  const options = {
    params,
  };

  return axios.get(url, options);
};
