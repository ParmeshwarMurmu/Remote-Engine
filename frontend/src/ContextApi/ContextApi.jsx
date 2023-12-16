import { useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const appContent = createContext()
export const ContextApi = ({children}) => {
    
    const [isAuth, setIsAuth] = useState(false)
    const token = localStorage.getItem('Remote-Engine-token')
    const userId = localStorage.getItem('Remote-Engine-userId')

    const [userData, setUserData] = useState({})


    useEffect(()=>{
      
        if(token){
            setIsAuth(true)
            axios.get(`http://localhost:8000/user/singleUser/${userId}`)
            .then((res)=>{
                console.log(res);
                setUserData(res.data.user)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }, [isAuth])



    return <appContent.Provider value={{isAuth, setIsAuth, userData}}>{children}</appContent.Provider>

  
}
