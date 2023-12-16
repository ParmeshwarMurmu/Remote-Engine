import { PRE_DEFINED_SKILLS_ERROR, PRE_DEFINED_SKILLS_LOADING, PRE_DEFINED_SKILLS_SUCCESS} from "./action";

const initialState = {
    preDefinedSkillsLoading: false,
    preDefinedSkills: [],
    preDefinedSkillsError: false
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case PRE_DEFINED_SKILLS_LOADING:
            return {
                ...state,
                preDefinedSkillsLoading: true,
            }

        case PRE_DEFINED_SKILLS_SUCCESS:
            return {
                ...state,
                preDefinedSkills: payload,
                preDefinedSkillsLoading: false
            }


        case PRE_DEFINED_SKILLS_ERROR:
            return {
                ...state,
                preDefinedSkillsError: false,
            }


        default:
            return {
                ...state,

            }
    }

}