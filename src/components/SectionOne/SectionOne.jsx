import React, { useRef } from 'react';
import styles from './SectionOne.module.css';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import videoSrc from '../../assets/videos/coding.mp4';


const SectionOne = () => {
  const ref = useRef(null);

  return (
  <section id="one" className={`spotlight style1 bottom ${styles.section}`}  ref={ref}>
    <div className="fit main">
      <VideoPlayer videoSrc={videoSrc}/>
    </div>
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-4 col-12-medium">
            <header>
              <h2>Tengo m&aacute;s de 10 a&ntilde;os de experiencia como desarrollador web</h2>
              <p>Acerca de mi carrera profesional</p>
            </header>
          </div>
          <div className="col-4 col-12-medium">
            <p className={styles.textJustify}>
            He tenido la oportunidad de trabajar en una amplia variedad de proyectos, utilizando diversos lenguajes y frameworks de programación. Desde 2008, he colaborado con empresas privadas y de gobierno como la Subsecretaría de Innovación y Modernización Gubernamental del Gobierno del Estado de Baja California. Cada proyecto ha sido una nueva oportunidad para aprender y asumir retos interesantes.
            </p>
          </div>
          <div className="col-4 col-12-medium">
            <p className={styles.textJustify}>
            Aunque tengo habilidades como desarrollador back-end en la lógica de negocios, mi verdadera pasión está en el desarrollo front-end y en el diseño UI/UX. Disfruto especialmente creando interfaces visuales atractivas y funcionales, garantizando que las aplicaciones se adapten perfectamente a todo tipo de dispositivos, desde móviles hasta escritorios. Mi objetivo siempre es ofrecer una experiencia de usuario fluida, intuitiva y accesible.
            </p>
          </div>
        </div>
      </div>
    </div>
    <a href="#two" className="goto-next scrolly">Next</a>
  </section>
  );
};

export default SectionOne;
