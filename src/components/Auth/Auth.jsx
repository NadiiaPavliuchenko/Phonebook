import React from 'react';
import { NavLink } from 'react-router-dom';

const Auth = () => {
  return (
    <nav>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </nav>
  );
};

export default Auth;
