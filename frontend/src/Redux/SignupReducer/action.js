import axios from "axios";
import { APP_URL, } from "../../Variables/AllVariables";
import { USER_SIGNUP_ENDPOINT } from "../../Api/EndPoints";

export const REGISTRATION_EMAIL = "REGISTRATION_EMAIL";
export const REGISTRATION_RESET = "REGISTRATION_RESET";



export const registrationEmailAction = (payload ) => {
    return { type: REGISTRATION_EMAIL, payload }
}

export const registrationEmailResetAction = () => {
  return { type: REGISTRATION_RESET, }
}





export const userRegistration = (data) => async(dispatch) => {

    return axios.post(`${APP_URL}${USER_SIGNUP_ENDPOINT}`, data)
    .then((res) => {
    
      alert(`${res.data.message}`)
      dispatch(registrationEmailResetAction())
      
    })
    .catch((err) => {
    

    }
    );
}
