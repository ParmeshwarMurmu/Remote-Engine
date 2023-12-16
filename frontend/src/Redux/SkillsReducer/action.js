import axios from "axios";
import { APP_URL } from "../../Variables/AllVariables";
import { ADDING_SKILLS__ENDPOINT } from "../../Api/EndPoints";


export const ADD_SKILLS = "ADD_SKILLS";
export const RESET_SKILLS = "RESET_SKILLS";



export const addSkillsAction = (payload) => {
    return { type: ADD_SKILLS, payload }
}


export const resetSkillsAction = () => {
  return { type: RESET_SKILLS}
}




export const addUserSkills = (data) => (dispatch) => {
    
 
    axios.post(`${APP_URL}${ADDING_SKILLS__ENDPOINT}`, data)
    .then((res) => {
      // console.log(res);
      alert(`${res.data.message}`)
      dispatch(resetSkillsAction())
      
    })
    .catch((err) => {
      // console.log(err);
      alert(`${err.code}`)
    }
    );
}
