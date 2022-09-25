import axios from 'axios';
import { apiUrl } from '../constants';

const signIn = async (email, password) => {

  const res = await axios.post(apiUrl + '/users/login', {
    email,
    password,
  })

  return res.data;
};

export default signIn;

