import { fetchDataAuth } from '@utils/fetch';
import { GET_CONTENT } from '@utils/constants/routes';

export const fetchContent = (access: string) => {
  return fetchDataAuth(`${GET_CONTENT}`, { access })
};