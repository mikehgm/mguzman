import React from 'react';
import useNavToggle from '../../hooks/useNavToggle';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
  const { toggleNav } = useNavToggle();

  return (
    <header id="header">
      <h1 id="logo">
        <Link to="/mguzman">Miguel Guzm&aacute;n</Link>
      </h1>
      <button id={styles.navToggle} onClick={toggleNav} aria-label="Toggle Navigation">☰</button>
      <nav id="nav">
        <ul>
          <li><Link to="/mguzman">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
