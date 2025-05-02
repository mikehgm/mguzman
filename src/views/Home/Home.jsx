import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import SectionOne from '../../components/SectionOne/SectionOne';
import SectionTwo from '../../components/SectionTwo/SectionTwo';
import SectionThree from '../../components/SectionThree/SectionThree';
import SectionFour from '../../components/SectionFour/SectionFour';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';

const Home = () => (
  <div id="page-wrapper" className={`landing ${styles.home}`}>
    <Header />
    <Banner />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <Contact />
    <Footer />
  </div>
);

export default Home;
