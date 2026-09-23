import React from 'react';

const NAV_LINKS = [
  { href: '#one', label: 'Experiencia' },
  { href: '#two', label: 'Drone' },
  { href: '#three', label: 'Video' },
  { href: '#four', label: 'Servicios' },
  { href: '#five', label: 'Contacto' },
];

const Header = () => (
  <header id="header">
    <h1 id="logo"><a href="#banner" className="scrolly">Miguel Guzm&aacute;n</a></h1>
    <nav id="nav">
      <ul>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}><a href={href} className="scrolly">{label}</a></li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
