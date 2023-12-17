

import { IS_AUTH } from "./action";

const initialState = {
    isAuth: false,
    
}

export const reducer = (state = initialState, {type, payload})=>{

    switch (type) {
        case IS_AUTH:
            return {
                ...state,
               isAuth: payload
            }


        default:
            return {
                ...state,
        
            }
    }

}