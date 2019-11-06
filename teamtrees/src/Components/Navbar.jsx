import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/navbar.css'

export default function Navbar() {
  return (
    <div>
      <header>
        <div className="brand">
          <div className="logo">
            <h4>#TEAMTREES</h4>
          </div>
        </div>
        <nav className="navbar-nav">
          <ul>
            <li><Link to="#">HOME</Link></li>
            <li><Link to="#">PURPOSE</Link></li>
            <li><Link to="#">ABOUT</Link></li>
            <li><Link to="#">PARTICIPANTS</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
