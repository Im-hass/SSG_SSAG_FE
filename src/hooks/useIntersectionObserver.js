import { useEffect, useRef } from 'react';

function useIntersectionObserver({ threshold = 1.0, onIntersect }) {
  const targetRef = useRef(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(onIntersect, { threshold });
    observer.observe(targetRef.current);

    // eslint-disable-next-line consistent-return
    return () => observer.disconnect();
  }, [onIntersect, threshold]);

  return { targetRef };
}

export default useIntersectionObserver;
