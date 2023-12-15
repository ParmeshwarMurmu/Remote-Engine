import { LOGIN_EMAIL } from "./action";

const initialState = {
    email: "",
    
}

export const reducer = (state = initialState, {type, payload})=>{

    switch (type) {
        case LOGIN_EMAIL:
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