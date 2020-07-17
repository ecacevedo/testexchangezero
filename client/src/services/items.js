import api from './api-helper';


export const allItems = async () => {
  const resp = await api.get('/items');
  
  return resp.data;

};

export const item = async (id) => {
  const resp = await api.get(`/items/${id}`);
  return resp.data;
};

export const postItem = async (ItemData) => {
  const resp = await api.post('/Items', { Item: ItemData })
  return resp.data;
};

export const putItem = async (id, ItemData) => {
  const resp = await api.put(`/Items/${id}`, { Item: ItemData })
  return resp.data;
};

export const deleteItem = async (id) => {
  const resp = await api.delete(`/Items/${id}`);
  return resp
};