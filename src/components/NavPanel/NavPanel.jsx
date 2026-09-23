import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#banner', label: 'Inicio' },
  { href: '#one', label: 'Experiencia' },
  { href: '#ai-chat', label: 'IA Chat' },
  { href: '#ai-automation', label: 'IA Automatización' },
  { href: '#two', label: 'Drone' },
  { href: '#three', label: 'Video' },
  { href: '#four', label: 'Servicios' },
  { href: '#five', label: 'Contacto' },
];

const NavPanel = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('navPanel-visible', open);
    return () => document.body.classList.remove('navPanel-visible');
  }, [open]);

  const goTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div id="titleBar">
        <button
          type="button"
          className="toggle"
          aria-label={'Menú'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        />
        <span className="title">
          <a href="#banner" onClick={(e) => goTo(e, '#banner')}>Miguel Guzm&aacute;n</a>
        </span>
      </div>
      <nav id="navPanel">
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} className="link depth-0" href={href} onClick={(e) => goTo(e, href)}>
            {label}
          </a>
        ))}
      </nav>
    </>
  );
};

export default NavPanel;
