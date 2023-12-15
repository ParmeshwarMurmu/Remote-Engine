import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const PrivateRoute = ({children}) => {
    const dispatch = useDispatch();


    const { email } = useSelector((store) => {
        return {
          email: store.LoginReducer.email,
        }
      }, shallowEqual)
    

  
}
