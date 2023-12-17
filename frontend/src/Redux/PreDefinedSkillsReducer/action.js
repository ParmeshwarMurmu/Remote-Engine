import axios from "axios";
import { APP_URL } from "../../Variables/AllVariables";
import { GET_PREDEFINED_SKILLS__ENDPOINT } from "../../Api/EndPoints";



export const PRE_DEFINED_SKILLS_LOADING = "PRE_DEFINED_SKILLS_LOADING";
export const PRE_DEFINED_SKILLS_SUCCESS = "PRE_DEFINED_SKILLS_SUCCESS";
export const PRE_DEFINED_SKILLS_ERROR = "PRE_DEFINED_SKILLS_ERROR";




export const preDefinedSkillsLoadingAction = () => {
    return { type: PRE_DEFINED_SKILLS_LOADING}
}

export const preDefinedSkillsSuccessAction = (payload) => {
  return { type: PRE_DEFINED_SKILLS_SUCCESS, payload}
}

export const preDefinedSkillsErrorAction = () => {
  return { type: PRE_DEFINED_SKILLS_ERROR}
}







export const getPreDefinedSkills = () => (dispatch) => {
    
    dispatch(preDefinedSkillsLoadingAction())
    axios.get(`${APP_URL}${GET_PREDEFINED_SKILLS__ENDPOINT}`)
    .then((res) => {
      
      dispatch(preDefinedSkillsSuccessAction(res.data.predefinedSkills))
      
    })
    .catch((err) => {
     
      dispatch(preDefinedSkillsErrorAction())
      alert(`${err.code}`)
    }
    );
}
