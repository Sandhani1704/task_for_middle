import * as entities from '../path/entities.json'
// const BASE_URL = 'http://localhost:3000';

export const getInitialDatas = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(entities.response), 1000);
  });
};

