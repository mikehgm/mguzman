import React, { useRef } from 'react';
import styles from './SectionThree.module.css';
import videoSrc from '../../assets/videos/video-inmobiliario.mp4';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const SectionThree = () => {
  const ref = useRef(null);

  return (
    <section id="three" className={`spotlight style3 left ${styles.section}`} ref={ref}>
      <span className="fit main bottom">
        <VideoPlayer classNameProp="backgroundVideo" videoSrc={videoSrc} />
      </span>
      <div className="content">
        <header>
          <h2>Videografo de eventos y negocios</h2>
        </header>
        <p className={styles.textJustify}>
          Me gusta capturar los momentos más importantes de la vida de las personas y crear recuerdos inolvidables. </p>
        <p className={styles.textJustify}>Ya sea un evento social o un video promocional para una empresa, me esfuerzo por capturar cada detalle importante, asegurándome de que sea de la mejor manera posible, tengo experiencia en la filmación de videos promocionales para empresas y negocios. Entiendo la importancia de mostrar lo mejor de un producto o servicio, y trabajo en estrecha colaboración con mis clientes para asegurarme de que sus necesidades y expectativas sean cumplidas.</p>
        <p className={styles.textJustify}>Ya sea que necesiten un video para redes sociales, un anuncio publicitario o un video corporativo, estoy aquí para ayudarles a contar su historia de la manera más efectiva posible.</p>
        
      </div>
      <a href="#four" className="goto-next scrolly">Next</a>
    </section>
  );
};

export default SectionThree;
