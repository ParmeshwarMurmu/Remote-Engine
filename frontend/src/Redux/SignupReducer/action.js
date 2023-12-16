import axios from "axios";
import { APP_URL, } from "../../Variables/AllVariables";
import { USER_SIGNUP_ENDPOINT } from "../../Api/EndPoints";

export const REGISTRATION_EMAIL = "REGISTRATION_EMAIL";



export const registrationEmailAction = (payload ) => {
    return { type: REGISTRATION_EMAIL, payload }
}


// const headers = {
//     Authorization: `bearer ${token}`,
// };


export const userRegistration = (data) => (dispatch) => {

    axios.post(`${APP_URL}${USER_SIGNUP_ENDPOINT}`, data)
    .then((res) => {
      console.log(res);
      alert(`${res.data.message}`)
      
    })
    .catch((err) => {
    

    }
    );
}
