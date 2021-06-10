import { apiUrls } from '@base/paths';
import { getData } from '@utils/api-helpers';
import { Person } from './landing.types';

export default async (): Promise<Person[]> => {
  const { data } = await getData(apiUrls.portal.users);

  return data;
};
