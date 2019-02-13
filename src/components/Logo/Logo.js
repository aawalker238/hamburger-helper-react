import React from 'react';
import burgerLogo from '../../assets/burger-logo.png';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="Hamburger Helper" />
    </div>
  );
};

export default Logo;
