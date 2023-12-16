import axios from "axios";

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





export const userOnboarding = (data) => (dispatch) => {

    console.log(data);
    axios.post("http://localhost:8000/user/signUp", data)
    .then((res) => {
      console.log(res);
      alert(`${res.data.message}`)
      
    })
    .catch((err) => {
    

    }
    );
}
