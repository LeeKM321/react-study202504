import React from 'react';
import classes from './Navigation.module.css';

const Navigation = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className={classes.nav}>
      {isLoggedIn && (
        <ul>
          <li>
            <a href='#'>MyPage</a>
          </li>
          <li>
            <a href='#'>Admin</a>
          </li>
          <li>
            <button onClick={() => onLogout()}>Logout</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
