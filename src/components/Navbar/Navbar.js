import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <header id='header'>
        <a href="#"><img className="logo" src="https://edukithprofilepictures.s3.ap-south-1.amazonaws.com/MentorClan+Website/logo_with_name.svg" alt="" /></a>
        <div>
            <ul id="navbar">
                <a href="#" className='navLink'><li>Our Mentors</li></a>
                <a href="#"className='navLink'><li>Become a Mentor</li></a>
                <a href="#" className='navLink'><li>About Us</li></a>
                <button className='navButton'>Get Started</button>
            </ul>
        </div>
        <div className="right">
          <h3 className="cart"></h3>
        </div>
    </header>
  )
}

export default Navbar;