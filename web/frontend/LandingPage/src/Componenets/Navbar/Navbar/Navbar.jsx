import React from 'react'
import './Navbar.css'

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
                
                <li>Login</li>
                <li>Sign Up</li>
                </ul>
            </div>
          
        </div>
    </div>
  )
}

export default Navbar