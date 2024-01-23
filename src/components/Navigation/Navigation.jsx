import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/authorization/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
      )}
    </nav>
  );
};

export default Navigation;
