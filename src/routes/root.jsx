import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom';


function Root() {
    const location = useLocation();
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
            <Link to="/contact" className='navlink'>Contact</Link>
            </li>
            <li>
            <Link to="/logout" className='navlink'>Logout</Link>
            </li>
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
