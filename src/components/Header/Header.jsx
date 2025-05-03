import React from 'react';
import useNavToggle from '../../hooks/useNavToggle';
import styles from './Header.module.css';

const Header = () => {
  const { toggleNav } = useNavToggle();

  return (
    <header id="header">
      <h1 id="logo"><a href="/mguzman">Miguel Guzm&aacute;n</a></h1>
      <button id={styles.navToggle} onClick={toggleNav} aria-label="Toggle Navigation">☰</button>
      <nav id="nav">
        <ul>
          <li><a href="/mguzman">Home</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
