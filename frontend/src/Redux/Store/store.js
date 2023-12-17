
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { reducer as SignupReducer } from '../SignupReducer/reducer'
import { reducer as LoginReducer } from '../LoginReducer/reducer'
import { reducer as IsAuthReducer } from '../IsAuthReducer/reducer'
import { reducer as OnboardingReducer } from '../OnboardingReducer/reducer'
import { reducer as UserDetailsReducer } from '../UserDetailsReducer/reducer'
import { reducer as SkillsReducer } from '../SkillsReducer/reducer'
import { reducer as PreDefinedSkillsReducer } from '../PreDefinedSkillsReducer/reducer'
import { reducer as ViewAllApplicationReducer } from '../ViewAllApplicationReducer/reducer'

const rootReducer = combineReducers({
    SignupReducer,
    LoginReducer,
    IsAuthReducer,
    OnboardingReducer,
    UserDetailsReducer,
    SkillsReducer,
    PreDefinedSkillsReducer,
    ViewAllApplicationReducer


})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
