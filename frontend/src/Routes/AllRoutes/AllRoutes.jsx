import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignUp } from '../Pages/SignUp/SignUp'
import { Onboarding } from '../Pages/Onboarding/Onboarding'
import { Login } from '../Pages/Login/Login'
import { PrivateRoute } from './PrivateRoute'
import { Skill } from '../Pages/Skills/Skill'
import { ViewApplication } from '../Pages/ViewApplication/ViewApplication'


export const AllRoutes = () => {

    return (

        <Routes>
            <Route path='/onboarding' element={<PrivateRoute>
                <Onboarding />
            </PrivateRoute>} />
            <Route path='/' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/addSkill' element={<Skill />} />
            {/* <Route path='/allApplication' element={<ViewApplication />} /> */}
        </Routes>
    )
}
