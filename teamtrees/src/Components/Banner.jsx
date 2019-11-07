import React from 'react'
import logo from '../images/teamtreeslogo.svg'
import herobg from '../images/herobg.svg'
import '../CSS/banner.css'

export default function Banner() {
  return (
    <div className="bannerClass">
      <img className="bannerlogo" src={logo} />
      <div className="helpplant">Help us plant 20 million trees around the globe by January 1st, 2020.</div>
      <img className="bannerimg" src={herobg}/>
    </div>
  )
}
