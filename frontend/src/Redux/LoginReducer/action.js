import axios from "axios";
import { isAuthEmailAction } from "../IsAuthReducer/action";
import { APP_URL, } from "../../Variables/AllVariables";
import { USER_LOGIN_ENDPOINT } from "../../Api/EndPoints";


export const LOGIN_EMAIL = "LOGIN_EMAIL";



export const loginEmailAction = (payload ) => {
    return { type: LOGIN_EMAIL, payload }
}




export const userLogin = (data) => async(dispatch) => {
   
 
    return axios.post(`${APP_URL}${USER_LOGIN_ENDPOINT}`, data)
    .then((res) => {
      console.log(res);
      alert(`${res.data.message}`)
      localStorage.setItem('Remote-Engine-token', res.data.token)
      localStorage.setItem('Remote-Engine-userId', res.data.userId)
      dispatch(isAuthEmailAction(true))
      // window.location.href('/onboarding')
    })
    .catch((err) => {
    

    }
    );
}
