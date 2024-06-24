import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom'
import { setUserLoggedIn } from '../features/login/loginSlice';


function Root() {
    const location = useLocation();
    const navigate = useNavigate(); 
    const userLoggedIn = useSelector(state =>
      state.login.userLoggedIn 
      
    )
    const dispatch = useDispatch() 
  
    useEffect(()=>{
      axios.get(`http://localhost:3000/auth/verify`,{
        withCredentials:true })
        .then(response=>{
          navigate('/')
          dispatch(setUserLoggedIn(true))
        })
  
        .catch(error=>{
          dispatch(setUserLoggedIn(false))
        })
     
      }, []); 
  
  
  
    return (
    <>
    <header>
    <div className='container'>
    <h1>Book Worm</h1>
        <nav>
            <ul className='navlist'>
            <li>
            <Link to="/" className='navlink'>Home</Link>
            </li>
            <li>
            <Link to="/books" className='navlink'>Books</Link>
            </li>
            <li>
            <Link to="/signup" className='navlink'>SignUp</Link>
            </li>
            {
              userLoggedIn? <li>
              <Link to="/logout" className='navlink'>Logout</Link>
              </li> : <li>
            <Link to="/login" className='navlink'>Login</Link>
            </li>
            
            }
            </ul>
        </nav>
    </div>
    </header>
    {location.pathname === '/' && (
                <img src="/coverpage.png.jpg" alt="Cover Page" />
            )}
    <main>
    
    <Outlet />
      </main>
      
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <nav>
            <ul className="footer-nav">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
)
}


export default Root
