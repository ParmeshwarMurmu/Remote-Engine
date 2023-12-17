import axios from "axios";
import { APP_URL } from "../../Variables/AllVariables";
import { ADDING_SKILLS__ENDPOINT, VIEW_ALL_APPLICATION_ENDPOINT } from "../../Api/EndPoints";


export const VIEW_APPLICATION_LOADING= "VIEW_APPLICATION_LOADING";
export const VIEW_APPLICATION_SUCCESS= "VIEW_APPLICATION_SUCCESS";
export const VIEW_APPLICATION_ERROR= "VIEW_APPLICATION_ERROR";




export const viewAplicationLoadingAction = () => {
    return { type: VIEW_APPLICATION_LOADING}
}

export const viewAplicationSuccessAction = (payload) => {
  return { type: VIEW_APPLICATION_SUCCESS, payload }
}


export const viewAplicationErrorAction = () => {
  return { type: VIEW_APPLICATION_ERROR,  }
}








export const getViewpplictionData = () => (dispatch) => {
    
    dispatch(viewAplicationLoadingAction())
    axios.post(`${APP_URL}${VIEW_ALL_APPLICATION_ENDPOINT}`)
    .then((res) => {
      console.log(res);
      
      dispatch(viewAplicationSuccessAction(res.data.allApplication))
      
    })
    .catch((err) => {
      // console.log(err);
      alert(`${err.code}`)
    }
    );
}
