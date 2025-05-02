import React from 'react';
import bannerImage from '../../assets/images/pic01.jpg';
import iamImage from '../../assets/images/iam.png';
import styles from './Banner.module.css';

const Banner = () => (
  <section id="banner">
    <div className="content">
      <header>
        <h3>Senior Front-End Developer</h3>
        <h2>
          Hola soy <span className={styles.iam}>Miguel Guzm&aacute;n</span>.
        </h2>
      </header>
      <span className="image"><img src={iamImage} className={styles.circleImage} alt="" /></span>
    </div>
    <a href="#one" className="goto-next scrolly">Next</a>
  </section>
);

export default Banner;
