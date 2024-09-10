import React, { useState } from 'react';
import { MdClose } from 'react-icons/md'; // Assuming Material Design icons
import MenuButton from './MenuButton';
import { Link } from 'react-router-dom';
import '../components/home.css'
import logo from '../assets/logo4.jpg'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center ">
        <span className="text-2xl font-[Poppins] cursor-pointer">
          <img className="h-10 inline" src={logo} alt="logo" />
          Tech Hub
        </span>

        {menuOpen ? (
          <MdClose className="text-3xl cursor-pointer mx-2" onClick={handleMenuClick} />
        ) : (
          <MenuButton onClick={handleMenuClick} />
        )}
      </div>

      <ul
        className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${
          menuOpen ? 'top-[80px] opacity-100' : ''
        }`}
      >
        <li className="mx-4 my-6 md:my-0">
          <a href="#job" className="text-xl font-quentiessential hover:text-cyan-500 duration-500">
            Job
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#service" className="text-xl font-quentiessential hover:text-cyan-500 duration-500">
            Service
          </a>
        </li>
        
        <li className="mx-4 my-6 md:my-0">
          <a href="#company" className="text-xl font-quentiessential hover:text-cyan-500 duration-500">
            Company
          </a>
        </li>
        <Link to='/login'><button className='mx-7 font-quentiessential text-xl bg-red-400 px-4 py-1 rounded-full' >Register</button></Link>
        <Link to='/login'><button className="bg-cyan-400 text-white font-quentiessential duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded ">
          login
        </button></Link>
        <li className="mx-4 my-6 md:my-0">
          <a href="#aboutus" className="text-xl font-quentiessential hover:text-cyan-500 duration-500">
            AboutUs
          </a>
        </li>
      </ul>
    </nav>
    <div className="container">
        <h3 className='text-6xl font-quent'>Find your Dream Job</h3>
        <h3 className='text-2xl mt-4 font-playwrite'>Jobs for you to Explore</h3>
     </div>
    </div>
  );
};

export default Navbar;
