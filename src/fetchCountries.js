const BASE_URL = 'https://restcountries.com';
const fields = 'fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
  return fetch(`${BASE_URL}/v3.1/name/${name}?${fields}`).then(
    response => {
      if (response.status === 404) {
        return Promise.reject(new Error());
      }
      return response.json();
    }
  );
};