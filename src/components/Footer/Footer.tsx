import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.root}>
      <div>&copy; {currentYear} - Weather Api</div>
    </footer>
  );
};

export default Footer;
