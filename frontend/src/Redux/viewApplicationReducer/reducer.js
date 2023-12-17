import { ADD_SKILLS, RESET_SKILLS } from "./action";

const initialState = {
    skill: ""
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ADD_SKILLS:
            return {
                ...state,
                skill: payload
            }

        case RESET_SKILLS:
            return {
                ...initialState
            }


        default:
            return {
                ...state,

            }
    }

}