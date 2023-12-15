import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignUp } from './SignUp'
import { Onboarding } from './Onboarding'
import { Login } from './Login'
import { PrivateRoute } from './PrivateRoute'


export const AllRoutes = () => {

    return (

        <Routes>
            <Route path='/onboarding' element={<PrivateRoute>
                <Onboarding />
            </PrivateRoute>} />
            <Route path='/' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}
