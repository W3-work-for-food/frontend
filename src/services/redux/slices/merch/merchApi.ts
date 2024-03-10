import { fetchDataAuth } from '@utils/fetch';
import { GET_AMBASSADORS } from '@utils/constants/routes';
import { IMerch } from '@utils/types/merchTypes';

export const fetchMerch = (access: string, id: string) => {
  return fetchDataAuth(`${GET_AMBASSADORS}/${id}/sentmerch`, { access });
};
export const fetchMerchBudget = (access: string, id: string) => {
  return fetchDataAuth(`${GET_AMBASSADORS}/${id}/sentmerch/budget`, { access });
};

export const sendMerch = async (access: string, body: IMerch, id: string) => {
  return fetchDataAuth(`${GET_AMBASSADORS}/${id}/sentmerch/`, { access }, 'POST', JSON.stringify(body));
};
