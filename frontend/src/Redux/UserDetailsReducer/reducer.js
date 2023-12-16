import { LOGIN_EMAIL, USER_DETAIILS_ERRROR, USER_DETAIILS_LOADING, USER_DETAIILS_SUCCESS } from "./action";

const initialState = {
    isLoading: false,
    userDetail: {},
    isError: false,
    isData: false
    
}

export const reducer = (state = initialState, {type, payload})=>{

    switch (type) {
        case USER_DETAIILS_LOADING:
            return {
                ...state,
               isLoading: true
            }

            case USER_DETAIILS_SUCCESS:
            return {
                ...state,
               isLoading: false,
               userDetail: payload,
               isData: true
            }

            case USER_DETAIILS_ERRROR:
            return {
                ...state,
               isLoading: false,
               isError: true
            }


        default:
            return {
                ...state,
        
            }
    }

}