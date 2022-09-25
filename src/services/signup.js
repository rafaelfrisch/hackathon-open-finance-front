import axios from 'axios';
import { apiUrl } from '../constants';

const signUp = async (data) => {

  let ans = {user: null, token: 0}

  await axios.post(apiUrl + '/users', {
    ...data,
  }).then(response =>{
    ans = response.data;
  }).catch(err => console.log(err));

  return ans;
};

export default signUp;
