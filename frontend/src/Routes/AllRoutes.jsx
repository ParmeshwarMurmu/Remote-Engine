import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { SignUp } from './SignUp'


export const AllRoutes = () => {

    return (

        <Routes>
            <Route path='/' element={<SignUp />} />
        </Routes>
    )
}
