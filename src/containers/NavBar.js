import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import Login from '../components/Login'

const NavBar = () => {
  return (
    <div className='navbar'>
      <span className="logo">THE PODCAST APP</span>
      <NavLink  to='/'>Home</NavLink>
      <NavLink  to='/podcasts'>Podcasts</NavLink>
      <Login />
    </div>
  );
};


export default NavBar;
