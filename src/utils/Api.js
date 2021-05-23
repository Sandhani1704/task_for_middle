import * as entities from '../entities.json'

export const getInitialDatas = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(entities.response), 1000);
  });
};

