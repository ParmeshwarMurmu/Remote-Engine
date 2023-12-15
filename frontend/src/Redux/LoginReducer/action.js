import axios from "axios";
import { isAuthEmailAction } from "../IsAuthReducer/action";

export const LOGIN_EMAIL = "LOGIN_EMAIL";



export const loginEmailAction = (payload ) => {
    return { type: LOGIN_EMAIL, payload }
}




export const userLogin = (data) => (dispatch) => {

    console.log(data);
    axios.post("http://localhost:8000/user/login", data)
    .then((res) => {
      console.log(res);
      alert(`${res.data.message}`)
      localStorage.setItem('Remote-Engine-token', res.data.token)
      localStorage.setItem('Remote-Engine-userId', res.data.userId)
      dispatch(isAuthEmailAction(true))
    })
    .catch((err) => {
    

    }
    );
}
