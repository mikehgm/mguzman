import React, { useRef } from 'react';
import styles from './SectionAiChat.module.css';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import videoSrc from '../../assets/videos/ai-chat.mp4';
import posterSrc from '../../assets/videos/ai-chat-poster.jpg';

const SectionAiChat = () => {
  const ref = useRef(null);

  return (
    <section id="ai-chat" className={`spotlight style2 right ${styles.section}`} ref={ref}>
      <div className="fit main">
        <VideoPlayer classNameProp="backgroundVideo" videoSrc={videoSrc} poster={posterSrc} />
      </div>
      <div className="content">
        <header>
          <h2>IA Chat</h2>
          <p>Asistentes conversacionales para tu negocio</p>
        </header>
        <p className={styles.textJustify}>
          Implemento asistentes de IA Chat a la medida de tu proyecto, capaces de atender a tus clientes las 24 horas del d&iacute;a, responder preguntas frecuentes al instante y guiar a cada visitante hacia la acci&oacute;n que necesitas.
        </p>
        <p className={styles.textJustify}>
          M&aacute;s que un simple bot, dise&ntilde;o experiencias que fortalecen la relaci&oacute;n con tus clientes:
        </p>
        <ul className={styles.list}>
          <li>Atenci&oacute;n inmediata 24/7, sin listas de espera.</li>
          <li>Captura y calificaci&oacute;n autom&aacute;tica de prospectos.</li>
          <li>Respuestas coherentes con el tono y la informaci&oacute;n de tu marca.</li>
          <li>Agenda de citas y seguimiento de conversaciones.</li>
          <li>Integraci&oacute;n con tu sitio web, WhatsApp o redes sociales.</li>
        </ul>
      </div>
      <a href="#ai-automation" className="goto-next scrolly">Next</a>
    </section>
  );
};

export default SectionAiChat;
