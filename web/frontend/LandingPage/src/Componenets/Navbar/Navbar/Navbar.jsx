import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Sustain Hub</div>
            {/* <span>toggle</span> */}
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                <Link to='/auth/login/'>
                  <li>Login</li>
                </Link>
                <li>Sign Up</li>
                </ul>
            </div>
          
        </div>
    </div>
  )
}

export default Navbar