import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../../assets/logo.png';
import github from '../../../assets/github.png';


const Navber = () => {
    const links = <>
        <NavLink  to='/' className='m-3 '>Home</NavLink>
        <NavLink to='/Apps' className='m-3'>Apps</NavLink>
        <NavLink to='/Installation' className='m-3'>Installation</NavLink>
    </>
    return (
             <div className="navbar  bg-base-100 shadow-sm max-w-6xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl"> <img className='w-10 h-8' src={logo} alt="" /><span className='text-purple-600'>HERO.IO</span> </Link >
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end ">
    <a className="btn bg-gradient-to-r from-purple-600 to-indigo-800 text-white font-semibold "><img className='w-6 h-6' src={github} alt="" /><a href="https://github.com/bakul5568?tab=repositories">Contribute</a></a>
  </div>
</div>
    );
    
};

export default Navber;