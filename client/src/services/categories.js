import api from './api-helper';

export const getCategories = async () => {
  const resp = await api.get('/categories');
  // debugger
  return resp.data;
}

export const getCategoriesId = async (id) => {
  const resp = await api.get(`/categories/${id}`);
  // debugger
  return resp.data;
}

export const addCategories = async (item_id, id) => {
  const resp = await api.get(`/items/${item_id}/category/${id}/`);
  return resp.data;
}