import { VIEW_APPLICATION_ERROR, VIEW_APPLICATION_LOADING, VIEW_APPLICATION_SUCCESS } from "./action";

const initialState = {
    isLoading: false,
    allApplication: [],
    isError: false,
    isData: false
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case VIEW_APPLICATION_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case VIEW_APPLICATION_SUCCESS:
            return {
                ...state,
                allApplication:payload,
                isData:true,
                isLoading: false
            }

            case VIEW_APPLICATION_ERROR:
            return {
                ...state,
                isError:true,
                isLoading: false
            }



        default:
            return {
                ...state,

            }
    }

}