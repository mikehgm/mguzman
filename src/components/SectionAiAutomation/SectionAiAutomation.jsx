import React, { useRef } from 'react';
import styles from './SectionAiAutomation.module.css';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import videoSrc from '../../assets/videos/ai-data.mp4';
import posterSrc from '../../assets/videos/ai-data-poster.jpg';

const SectionAiAutomation = () => {
  const ref = useRef(null);

  return (
    <section id="ai-automation" className={`spotlight style3 left ${styles.section}`} ref={ref}>
      <span className="fit main bottom">
        <VideoPlayer classNameProp="backgroundVideo" videoSrc={videoSrc} poster={posterSrc} />
      </span>
      <div className="content">
        <header>
          <h2>IA Automatizaci&oacute;n</h2>
          <p>Procesos inteligentes con tus propios datos</p>
        </header>
        <p className={styles.textJustify}>
          Llevo la inteligencia artificial m&aacute;s all&aacute; del chat: integro sistemas RAG (Retrieval-Augmented Generation) que conectan modelos de IA con la informaci&oacute;n real de tu empresa, para obtener respuestas precisas basadas en tus documentos, bases de datos y procesos.
        </p>
        <p className={styles.textJustify}>
          Automatizo tareas repetitivas y flujos de trabajo para que tu equipo se enfoque en lo que realmente importa:
        </p>
        <ul className={styles.list}>
          <li>Sistemas RAG con tus documentos, manuales y bases de conocimiento.</li>
          <li>Automatizaci&oacute;n de flujos de trabajo e integraciones vía API.</li>
          <li>Extracci&oacute;n y an&aacute;lisis autom&aacute;tico de informaci&oacute;n.</li>
          <li>Conexi&oacute;n con tus herramientas actuales (CRM, ERP, hojas de c&aacute;lculo).</li>
          <li>Agentes de IA que ejecutan tareas de principio a fin.</li>
        </ul>
      </div>
      <a href="#two" className="goto-next scrolly">Next</a>
    </section>
  );
};

export default SectionAiAutomation;
