import { ART_SUBMISSION_ERROR, ART_SUBMISSION_LOADING, ART_SUBMISSION_SUCCESS, REGISTRATION_EMAIL, USER_COMMENT, USER_COMMENT_RESET } from "./action";

const initialState = {
    email: ""
}

export const reducer = (state = initialState, {type, payload})=>{

    switch (type) {
        case REGISTRATION_EMAIL:
            return {
                ...state,
               email: payload
            }


        default:
            return {
                ...state,
        
            }
    }

}