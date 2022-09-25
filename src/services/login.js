import axios from 'axios';
import { apiUrl } from '../constants';

const signIn = async (email, password) => {
  let ans = {}
  await axios.post(apiUrl + '/users/login', {
    email,
    password,
  }).then(response =>{
    console.log(response.data)
    ans = response.data;
  }).catch(err => console.log(err));
  
  return ans;
};

export default signIn;

