import React from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './MainHeader.module.css';

const MainHeader = ({ onLogout }) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
