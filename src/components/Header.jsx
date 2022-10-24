import React from 'react'
import { BsListNested } from "react-icons/bs";
import './Header.css'
import logo from '../img/logo.jpg'

function Header() {
  return (
    <div className='header'>
      <div className="header-container">
        <img className='logo' src={logo}/>
      </div>
    </div>
  )
}

export default Header