import React, { useRef } from 'react';
import sectionTwoImage from '../../assets/images/pic03.jpg';
import styles from './SectionTwo.module.css';
import { motion, useInView } from 'framer-motion';
import videoSrc from '../../assets/videos/drone-flight-salada.mp4';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const SectionTwo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="two" className={`spotlight style2 right ${styles.section}`} ref={ref}>
    <div className="fit main">
        <VideoPlayer videoSrc={videoSrc} />
    </div>
    <div className="content">
      <header>
        <h2>Tomas aéreas con Drone</h2>
        <p>&Uacute;nicas y fascinantes</p>
      </header>
      <p className={styles.textJustify}>
        Pilotar drones y capturar impresionantes recorridos desde el aire es una de mis grandes pasiones. 
      </p>
      <p className={styles.textJustify}>
        Siempre que tengo la oportunidad, aprovecho mis vacaciones para explorar nuevos lugares y llevar mi drone conmigo. Me encanta colaborar con amigos fotógrafos y videógrafos, ofreciendo mis servicios de tomas aéreas para dar un toque cinematográfico a sus proyectos. Ya sea para un video de boda, quinceañera, comercial o inmobiliario, una toma aérea siempre agrega una perspectiva única y fascinante.</p>
      
    </div>
    <a href="#three" className="goto-next scrolly">Next</a>
  </section>
  );
};

export default SectionTwo;
