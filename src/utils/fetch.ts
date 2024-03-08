export const checkRes = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

export const fetchData = async (url: string, data: object) => {
  let res = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return checkRes(res);
};

export const fetchDataAuth = async (
  url: string,
  data: { access: string },
  method = 'GET'
) => {
  let res = await fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${data.access}`,
    },
  });
  return checkRes(res);
};

