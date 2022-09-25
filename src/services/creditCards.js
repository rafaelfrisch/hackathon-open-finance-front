import axios from 'axios';
import { apiUrl } from '../constants';

const getCreditCards = async (organizationId, costumerId, creditCardAccountId) => {
    const token = localStorage.getItem('token');
    console.log(token)
    const url = apiUrl + "/users/creditcarddata/" + creditCardAccountId + "?";
    const data = {
        body: {
            organizationId,
            costumerId
        }
        
    }
    const config = {
        headers: {
            'Authorization': "Bearer " + token
        }
    }
    console.log(token)
    console.log(data);
    const res = await axios.get(url, data, config);
    console.log(res.data)
    return res.data;


}

export default getCreditCards;