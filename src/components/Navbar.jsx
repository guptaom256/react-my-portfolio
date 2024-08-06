/* eslint-disable no-unused-vars */
import React from 'react';
import logo from "../assets/assets/logo.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
// import { FaMailchimp } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 item-center">
            <img className='w-24 mx-2' src={logo} alt="logo" />
        </div>

        <div className='m-8 flex items-center kustify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/om-gupta-3961a1178/?originalSubdomain=in">
          <FaLinkedin />
        </a>
        <a href="https://github.com/guptaom256">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/omgupta256/">
          <FaInstagram />
        </a>
        </div>
    </nav>
  )
}

export default Navbar;
