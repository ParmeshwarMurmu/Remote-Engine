import { ONBOARDING_EDUCATIONAL_EXPERIENCE, ONBOARDING_EMAIL, ONBOARDING_FIRST_NAME, ONBOARDING_LAST_NAME, ONBOARDING_PHONE_NUMBER, ONBOARDING_PROFESSIONAL_EXPERIENCE, ONBOARDING_RESET, ONBOARDING_SKILLS } from "./action";

const initialState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    skills: [],
    professionalExperience: [],
    educationalExperience: [],
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ONBOARDING_FIRST_NAME:
            return {
                ...state,
                firstName: payload
            }
            
            case ONBOARDING_LAST_NAME:
            return {
                ...state,
                lastName: payload
            }

            case ONBOARDING_PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: payload
            }

            case ONBOARDING_EMAIL:
            return {
                ...state,
                email: payload
            }

            case ONBOARDING_SKILLS:
            return {
                ...state,
                skills: [...state.skills, payload]
            }

            case ONBOARDING_PROFESSIONAL_EXPERIENCE:
            return {
                ...state,
                professionalExperience: payload
            }

            case ONBOARDING_EDUCATIONAL_EXPERIENCE:
            return {
                ...state,
                educationalExperience: payload
            }

            case ONBOARDING_RESET:
            return {
                ...initialState,
              
            }

        default:
            return {
                ...state,

            }
    }

}