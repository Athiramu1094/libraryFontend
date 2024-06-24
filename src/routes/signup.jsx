import React, { useState } from 'react'
import axios from 'axios';

function SignUp ()  {
    const [name,setName] = useState('')
    const [email,setEmail]=useState('')
    const[password,setPassword]= useState('')

    function handleSignup(event){
    event.preventDefault()
    //console.log(name)
    const data = {
        name:name,
        email:email,
        password:password
    }//created userModel in backend

    axios.post(`http://localhost:3000/users`, data)
    .then(response => console.log(response))
    .catch(error=>console.log(error))

    }
  return (
 <main>
    <section className='signup-section'>
        <h1>Signup</h1>
        <form onSubmit={handleSignup}>
            <label htmlFor="name">Name</label>
            <input onChange={(event)=>setName(event.target.value)} type="text" />
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
//after submit check inside mongodb if new data is added
export default SignUp
