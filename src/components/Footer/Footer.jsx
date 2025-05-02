import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
  <footer id="footer">
    <ul className="icons">
      <li>
        <a href="https://x.com/Mike_GITD" target='_blank' className="icon brands alt">
          <i className={`fa-brands fa-square-x-twitter ${styles.footerIcon}`}></i>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/mikebassistx" target='_blank' className="icon brands alt">
        <i className={`fa-brands fa-square-facebook ${styles.footerIcon}`}></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/mhguzman/" target='_blank' className="icon brands alt">
        <i className={`fa-brands fa-linkedin ${styles.footerIcon}`}></i>
        </a>
      </li>
      <li>
        <a href="mailto:mguzman.code@gmail.com?Subject=Cotizacion%20de%20servicio"  className="icon solid alt">
          <i className={`fa-solid fa-envelope ${styles.footerIcon}`}></i>
        </a>
      </li>
    </ul>
    <ul className="copyright">
      <li>&copy; Todos los derechos reservados.</li>
      <li>Design: <a href="https://mguzman.dev">MGuzman</a></li>
    </ul>
  </footer>
  );
};

export default Footer;
