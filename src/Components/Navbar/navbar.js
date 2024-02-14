import React from 'react'
import './navbar.css';
import logo from '../../Assets/logo.jpg';

import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">Client</Link>
        <Link className="desktopMenuListItem">Portfoliot</Link>
        <Link className="desktopMenuListItem">About</Link>



        </div>
        <button className="desktopMenuBtn">Contact</button>
    </nav>

  )
}

export default Navbar