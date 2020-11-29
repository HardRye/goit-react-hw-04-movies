import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <div className={styles.container}>
    <ul className={styles.navList}>
      <li>
        <NavLink
          to="/"
          exact
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={styles.navLink}
          activeClassName={styles.navLinkActive}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
