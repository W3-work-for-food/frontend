import { fetchDataAuth } from '@utils/fetch';
import { GET_AMBASSADORS } from '@utils/constants/routes';

export const fetchAmbassadors = (access: string) => {
  return fetchDataAuth(`${GET_AMBASSADORS}`, { access });
};

export const fetchAmbassador = (access: string, id: string) => {
  return fetchDataAuth(`${GET_AMBASSADORS}/${id}`, { access });
};
