import { useEffect, useState } from 'react';

const useScroll = () => {
  const [state, setState] = useState({
    y: 0,
  });

  const onScroll = () => {
    setState({ y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
};

export default useScroll;
