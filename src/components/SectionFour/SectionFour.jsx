import React, { useRef } from 'react';
import designImage from '../../assets/images/design-white.png';
import droneImage from '../../assets/images/drone-white.png';
import virtualTourImage from '../../assets/images/360-degrees-white.png';
import styles from './SectionFour.module.css';
import { motion, useInView } from 'framer-motion';


const SectionFour = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="four" className={`wrapper style1 special fade-up ${styles.section}`} ref={ref}>
        <div className="container">
            <header className="major">
                <h2>Mis habilidades y servicios</h2>
                <p>Desarrollo y Audiovisual</p>
            </header>
            <div className="box alt">
                <div className="row gtr-uniform">
                    <section className="col-4 col-6-medium col-12-xsmall">
                        <span className="icon solid alt major">
                            <i className={`fa-solid fa-laptop-code ${styles.skillIcon}`}></i>
                        </span>
                        <h3>Desarrollo de Aplicaciones Web</h3>
                        <p>Aplicaciones responsivas con HTML5, CSS3,  React, Angular, Laravel, NodeJS, Python Flask.</p>
                    </section>
                    <section className="col-4 col-6-medium col-12-xsmall">
                        <span className="icon solid alt major">
                            <img src={designImage} alt="design" className={styles.skillIconImage} />
                        </span>
                        <h3>Dise&ntilde;o UX/UI</h3>
                        <p>Aplicaciones intuitivas y amigables para el usuario, adaptables para dispositivos moviles y de escritorio.</p>
                    </section>
                    <section className="col-4 col-6-medium col-12-xsmall">
                        <span className="icon solid alt major">
                            <i className={`fa-solid fa-camera ${styles.skillIcon}`}></i>
                        </span>
                        <h3>Videografo</h3>
                        <p>Servicio de video y edici&oacute;n para creaci&oacute;n de contenido empresarial y redes sociales.</p>
                    </section>
                    <section className="col-4 col-6-medium col-12-xsmall">
                        <span className="icon solid alt major">
                            <img src={droneImage} alt="drone" className={styles.skillIconImage} />
                        </span>
                        <h3>Piloto de Drone</h3>
                        <p>Creaci&oacute;n de tomas a&eacute;reas con fotograf&iacute;a y/o video para contenido filmogr&aacute;fico o fotogrametr&iacute;a y escaneo de superficies.</p>
                    </section>
                    <section className="col-4 col-6-medium col-12-xsmall">
                        <span className="icon solid alt major">
                            <i className={`fa-solid fa-map-location-dot ${styles.skillIcon}`}></i>
                        </span>
                        <h3>Fotogrametr&iacute;a</h3>
                        <p>Levantamiento fotogram&eacute;tricos de superficies para creaci&oacute;n de nube de puntos y curva de nivel.</p>
                    </section>
                    <section className="col-4 col-6-medium col-12-xsmall">
                        <span className="icon solid alt major">
                            <img src={virtualTourImage} alt="virtual-tour" className={styles.skillIconImage} />
                        </span>
                        <h3>Virtual tour 360</h3>
                        <p>Creaci&oacute;n de recorridos virtuales 360 para inmuebles o complejos industriales.</p>
                    </section>
                </div>
            </div>
            
        </div>
    </section>
  );
};

export default SectionFour;
