import { baseUrl as api } from '@/services/api.config'
import axios from 'axios'


export const getAllUsers = async () => {
  const response = await axios.get(`${api}/users`);
  console.log(response.data.data);
  return response.data.data;
}

export const getOneUser = async (id) => {
  const response = await axios.get(`${api}/users/${id}`);
  console.log(response.data);
  
  return response.data.data;
}