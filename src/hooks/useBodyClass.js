import { useEffect } from 'react';

const useBodyClass = (classNameToRemove) => {
  useEffect(() => {
    document.body.classList.remove(classNameToRemove);
  }, [classNameToRemove]);
};

export default useBodyClass;
