import { fetchData, fetchDataAuth } from '@/utils/fetch';
import { GET_USER_URL, LOGIN_URL } from '@utils/constants/routes';

export const login = (email: string, password: string) => {
  return fetchData(`${LOGIN_URL}`, { email, password });
};

export const logout = (access: string) => {
  return access !== '';
};

export const getuser = (access: string) => {
  return fetchDataAuth(`${GET_USER_URL}`, { access });
};
