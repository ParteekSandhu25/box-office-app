const BASE_URL = 'https://api.tvmaze.com';

const getApi = async queryString => {
  const response = await fetch(`${BASE_URL}${queryString}`);
  const body = await response.json();

  return body;
};

export const showSearch = query => getApi(`/search/shows?q=${query}`);
