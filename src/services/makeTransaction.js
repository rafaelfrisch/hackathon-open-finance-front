import axios from "axios"
import { apiUrl } from "../constants";

const makeTransaction = async (senderAccountHash, receiverAccountHash, value, token) => {
  const res = await axios.post(apiUrl + '/users/maketransaction', {
    senderAccountHash,
    receiverAccountHash,
    value,
  }, {
    headers: {
      "Authorization": "Bearer " + token
    },
  });

  return res.data;
};

export default makeTransaction;
