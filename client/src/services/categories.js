import api from './api-helper';

export const getCategories = async () => {
  const resp = await api.get('/categories');
  // debugger
  return resp.data;
}

