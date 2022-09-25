import axios from 'axios';
import { apiUrl } from '../constants';

export const requestGet = async (endpoint, token) => {

  const res = await axios.get(apiUrl + endpoint, {
    headers: {
      "Authorization": "Bearer " + token
    }
  })
  console.log("\nresposta:", res)

  return res;
};

