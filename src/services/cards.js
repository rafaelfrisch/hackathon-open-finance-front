import axios from "axios";
import { apiUrl } from "../constants"

const getLastBill = async (organizationId, customerId, creditCardAccountId) => {
    let url = apiUrl + "/users/creditcarddata/" + creditCardAccountId + "?";
    url += "organizationId=" + organizationId + "&"+ "customerId="+customerId;

    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    let bill = {}
    await axios.get(url, config).then(response =>{
        console.log(response.data)
        bill = response.data[0];
    }).catch(err => console.log(err));
    return bill;
}

export default getLastBill;