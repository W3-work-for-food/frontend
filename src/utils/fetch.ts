export const checkRes = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

export const fetchData = async (url: string, data: object) => {
  const res = await fetch(url, {
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
  method: 'GET' | 'POST' = 'GET',
  body?: string
) => {
  const options: RequestInit = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token ${data.access}`,
    },
  };

  if (body && method === 'POST') {
    options.body = body;
  }

  const res = await fetch(url, options);
  return checkRes(res);
};
