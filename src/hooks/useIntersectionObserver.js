import { useRef, useState, useEffect } from "react";

export function useIntersectionObserver({ threshold = 0.08, root = null, rootMargin = "0px" } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold, root, rootMargin });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, root, rootMargin]);

  return [ref, isVisible];
}

export default useIntersectionObserver;
