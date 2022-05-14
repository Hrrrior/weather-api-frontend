import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.root}>
      {/* <Link to="/">Get some weather 🤌</Link> */}
      <ul className={classes.navLinks}>
        <li>
          <Link className="button" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="button" to="/cities">
            Cities
          </Link>
        </li>
        <li>
          <Link className="button" to="/weather">
            Weather
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
