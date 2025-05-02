import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a.scrolly');
    const handleClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    links.forEach(link => link.addEventListener('click', handleClick));
    return () => links.forEach(link => link.removeEventListener('click', handleClick));
  }, []);
};

export default useSmoothScroll;
