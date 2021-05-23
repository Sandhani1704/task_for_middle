import * as entities from '../path/entities.json'
const BASE_URL = 'http://localhost:3000';

// console.log(entities)

// export const getInitialDatas = () => {
//   return fetch(`${BASE_URL}/${"C:\Users\Tom\Desktop\Lanit\task_for_middle\public\entities.json"}`, {
//     method: 'GET',
//     headers: {
//       "Accept": "application/json",
//     },
//   })
//     .then((res) => {
//       if (res.status === 200) {
//         return res.json();
//       }
//       return Promise.reject(`Error: ${res.status}`);
//     });
// }

// export const getInitialDatas = () => {
//   return Promise.resolve(entities);
// }

export const getInitialDatas = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(entities), 1000);
  });
};

// export async function getInitialDatas() {
//   const res = await fetch(`${BASE_URL}/${entities}`);
//   if (!res.ok) {
//     throw new Error(`Could not fetch ${entities}` +
//       `, received ${res.status}`);
//   }
//   return await res;
// }
