import React from 'react';
import styles from './Footer.module.css';

const SOCIAL_LINKS = [
  { href: 'https://x.com/Mike_GITD', label: 'X (Twitter)', icon: 'fa-brands fa-square-x-twitter' },
  { href: 'https://www.linkedin.com/in/mhguzman/', label: 'LinkedIn', icon: 'fa-brands fa-linkedin' },
  { href: 'https://github.com/mikehgm', label: 'GitHub', icon: 'fa-brands fa-square-github' },
];

const Footer = () => {
  return (
  <footer id="footer">
    <ul className="icons">
      {SOCIAL_LINKS.map(({ href, label, icon }) => (
        <li key={href}>
          <a href={href} target="_blank" rel="noopener noreferrer" className="icon brands alt" aria-label={label}>
            <i className={`${icon} ${styles.footerIcon}`} aria-hidden="true"></i>
          </a>
        </li>
      ))}
      <li>
        <a href="mailto:mguzman.code@gmail.com?Subject=Cotizacion%20de%20servicio" className="icon solid alt" aria-label="Email">
          <i className={`fa-solid fa-envelope ${styles.footerIcon}`} aria-hidden="true"></i>
        </a>
      </li>
    </ul>
    <ul className="copyright">
      <li>&copy; {new Date().getFullYear()} Miguel Guzm&aacute;n. Todos los derechos reservados.</li>
      <li>Plantilla: <a href="https://html5up.net" target="_blank" rel="noopener noreferrer">HTML5 UP</a></li>
    </ul>
  </footer>
  );
};

export default Footer;
