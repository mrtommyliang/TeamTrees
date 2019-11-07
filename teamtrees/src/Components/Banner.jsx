import React from 'react'
import logo from '../images/teamtreeslogo.svg'
import herobg from '../images/herobg.svg'
import '../CSS/banner.css'

export default function Banner() {
  return (
    <div className="bannerClass">
      <img className="bannerlogo" src={logo} />
      <img className="bannerimg" src={herobg}/>
    </div>
  )
}
