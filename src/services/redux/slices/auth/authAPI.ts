import checkRes from '@/utils/fetch';
import { GET_USER_URL, LOGIN_URL } from '@/utils/constants';

const fetchData = (url: string, data: object) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => checkRes(res));
};

const fetchDataAuth = (
  url: string,
  data: { access: string },
  method = 'GET'
) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${data.access}`,
    },
  }).then((res) => checkRes(res));
};

// const fetchDataAuthLogout = (
//   url: string,
//   data: { access: string },
//   method = 'POST'
// ) => {
//   return fetch(url, {
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Token ${data.access}`,
//     },
//     body: JSON.stringify({ data }),
//   }).then((res) => checkRes(res));
// };

export const login = (email: string, password: string) => {
  return fetchData(`${LOGIN_URL}`, { email, password });
};

export const logout = (access: string) => {
  if (access !== '') return true;
  return false;
};

export const getuser = (access: string) => {
  return fetchDataAuth(`${GET_USER_URL}`, { access });
};
