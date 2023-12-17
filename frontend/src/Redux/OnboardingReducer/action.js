import axios from "axios";
import { APP_URL, TOKEN } from "../../Variables/AllVariables";
import { SUBMIT_ONBOARDING_FORM__ENDPOINT } from "../../Api/EndPoints";

export const ONBOARDING_FIRST_NAME = "ONBOARDING_FIRST_NAME";
export const ONBOARDING_LAST_NAME = "ONBOARDING_LAST_NAME";
export const ONBOARDING_PHONE_NUMBER = "ONBOARDING_PHONE_NUMBER";
export const ONBOARDING_EMAIL = "ONBOARDING_EMAIL";
export const ONBOARDING_SKILLS = "ONBOARDING_SKILLS";
export const ONBOARDING_PROFESSIONAL_EXPERIENCE = "ONBOARDING_PROFESSIONAL_EXPERIENCE";
export const ONBOARDING_EDUCATIONAL_EXPERIENCE = "ONBOARDING_EDUCATIONAL_EXPERIENCE";
export const ONBOARDING_RESET = "ONBOARDING_RESET";



export const onboardingFirstNameAction = (payload ) => {
    return { type: ONBOARDING_FIRST_NAME, payload }
}


export const onboardingLastNameAction = (payload ) => {
  return { type: ONBOARDING_LAST_NAME, payload }
}


export const onboardingEmailAction = (payload ) => {
  return { type: ONBOARDING_EMAIL, payload }
}


export const onboardingPhoneNumberAction = (payload ) => {
  return { type: ONBOARDING_PHONE_NUMBER, payload }
}


export const onboardingSkillsAction = (payload ) => {
  return { type: ONBOARDING_SKILLS, payload }
}


export const onboardingProfessionalExperienceAction = (payload ) => {
  return { type: ONBOARDING_PROFESSIONAL_EXPERIENCE, payload }
}

export const onboardingEducationalExperienceAction = (payload ) => {
  return { type: ONBOARDING_EDUCATIONAL_EXPERIENCE, payload }
}

export const onboardingResetAction = ( ) => {
  return { type: ONBOARDING_RESET}
}


export const completeOnboarding = (data) => (dispatch) => {

    
    axios.post(`${APP_URL}${SUBMIT_ONBOARDING_FORM__ENDPOINT}`, data, {
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
    .then((res) => {
     
      alert(res.data.message)
      
      
    })
    .catch((err) => {
    

    }
    );
}
