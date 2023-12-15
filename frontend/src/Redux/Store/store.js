
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { reducer as SignupReducer } from '../SignupReducer/reducer'
import { reducer as LoginReducer } from '../LoginReducer/reducer'

const rootReducer = combineReducers({
    SignupReducer,
    LoginReducer

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
