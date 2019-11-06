import React, { Component } from 'react'
import '../CSS/navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="nav-wrapper-flex">
          <h3 class="title">COMPANY</h3>
          <i class="material-icons" id="mobile-menu">menu</i>
          <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}
