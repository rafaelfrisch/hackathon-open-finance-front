import axios from 'axios';
import { apiUrl } from '../constants';

const signUp = async (data) => {

  const res = await axios.post(apiUrl + '/users', {
    ...data,
  })

  return res.data;
};

export default signUp;
