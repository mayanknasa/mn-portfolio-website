import { useState, useEffect } from "react";

export function useCountUp(target, startAnimation = false, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    const startTime = Date.now();
    const intervalId = setInterval(() => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      // Cubic ease-out
      setCount(Math.floor((1 - Math.pow(1 - progress, 3)) * target));
      if (progress >= 1) {
        setCount(target);
        clearInterval(intervalId);
      }
    }, 16);

    return () => clearInterval(intervalId);
  }, [startAnimation, target, duration]);

  return count;
}

export default useCountUp;
