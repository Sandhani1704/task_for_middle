  export const getInitialDatas = (url) => {
    return fetch(`${BASE_URL}/${url}`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      });
  }

  const BASE_URL = 'http://localhost:3000';
  