import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
    

    const { isAuth } = useSelector((store) => {
        return {
            isAuth: store.IsAuthReducer.isAuth,
        }
    }, shallowEqual)





    if(isAuth){
        return children
    }
    else{
        alert('Please Login To Continue.')
        return <Navigate to={'/login'} />
    }







}
