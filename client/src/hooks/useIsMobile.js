import {useEffect, useState} from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true);
  const onResize = () => setIsMobile(window.innerWidth < 1160);

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
