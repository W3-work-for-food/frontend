import { fetchDataAuth } from '@utils/fetch';
import { GET_NOT_VIEWED_NOTIFICATIONS, GET_VIEWED_NOTIFICATIONS } from '@utils/constants/routes';

export const fetchViewedNotifications = (access: string) => {
  return fetchDataAuth(`${GET_VIEWED_NOTIFICATIONS}`, { access });
};

export const fetchUnviewedNotifications = (access: string) => {
  return fetchDataAuth(`${GET_NOT_VIEWED_NOTIFICATIONS}`, { access });
};
