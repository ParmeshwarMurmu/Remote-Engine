import axios from "axios";
import { SINGLE_USER_DETAIL__ENDPOINT } from "../../Api/EndPoints";
import { APP_URL, } from "../../Variables/AllVariables";



export const USER_DETAIILS_LOADING = "USER_DETAIILS_LOADING";
export const USER_DETAIILS_SUCCESS = "USER_DETAIILS_SUCCESS";
export const USER_DETAIILS_ERRROR = "USER_DETAIILS_ERRROR";


export const userDetailsLoadingAction = () => {
  return { type: USER_DETAIILS_SUCCESS}
}

export const userDetailsSuccessAction = (payload) => {
    return { type: USER_DETAIILS_SUCCESS, payload }
}

export const userDetailsErrorAction = () => {
  return { type: USER_DETAIILS_SUCCESS }
}



export const getUserDetails = (id) => (dispatch) => {
    
    dispatch(userDetailsLoadingAction())
   
    axios.get(`${APP_URL}${SINGLE_USER_DETAIL__ENDPOINT}/${id}`)
    .then((res) => {
      // console.log(res.data)
      dispatch(userDetailsSuccessAction(res.data.userDetail))
  
    })
    .catch((err) => {
      dispatch(userDetailsErrorAction())

    }
    );
}
