import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import Login from '../components/Login'

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink style={{padding: '12px'}} to='/'>Home</NavLink> 
      <NavLink style={{padding: '12px'}} to='/podcasts'>Podcasts</NavLink>
      <Login />
    </div>
  );
};


export default NavBar;
