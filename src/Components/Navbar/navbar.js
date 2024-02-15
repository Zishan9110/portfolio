import React from 'react'
import './navbar.css';
import logo from '../../Assets/logo.jpg';

import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-40} duration={500}className="desktopMenuListItem">Client</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">Portfoliot</Link>
        <Link activeClass='active' to='language' spy={true} smooth={true} offset={-100} duration={500}className="desktopMenuListItem">About</Link>



        </div>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
        }}>Contact</button>
    </nav>

  )
}

export default Navbar