import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserLoggedIn } from '../features/login/loginSlice';


function Login ()  {
    const [email,setEmail]=useState('')
    const[password,setPassword]= useState('')

    const navigate = useNavigate() 
    const dispatch = useDispatch()
    function handleLogin(event){
    event.preventDefault()
    
    const data = {
        email:email,
        password:password
    }

    axios.post(`http://localhost:3000/auth/login`, data, {
        withCredentials:true 
    })
    .then(response => {
        dispatch(setUserLoggedIn(true))
        navigate('/') //to home page
    })
    .catch(error=>console.log(error))

    }
  return (
 <main>
    <section className='signup-section'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <label htmlFor="email">E-mail</label>
            <input onChange={(event)=>setEmail(event.target.value)} type="email" />
            <label htmlFor="password">Password</label>
            <input onChange={(event)=>setPassword(event.target.value)} type="password" />
            <button>Submit</button>
        </form>
    </section>
 </main>
  )
}

export default Login
