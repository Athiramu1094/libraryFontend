import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { setUserLoggedIn } from '../features/login/loginSlice';


function Logout(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get(`http://localhost:3000/auth/logout`,{ withCredentials:true })
        .then(response =>{
            dispatch(setUserLoggedIn(false))
            navigate('/login')
        })
    
        .catch(error =>{
            console.log('could not logout')
    
        })

    })
   
  return (
    <main>

    </main>
  )
}

export default Logout
