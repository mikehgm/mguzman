import { useEffect, useState } from 'react';

const useNavToggle = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector('#nav');
    if (nav) {
      nav.classList.toggle('active', isNavOpen);
    }
  }, [isNavOpen]);

  const toggleNav = () => {
    setIsNavOpen(prev => !prev);
  };

  return { isNavOpen, toggleNav };
};

export default useNavToggle;
