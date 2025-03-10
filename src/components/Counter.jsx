import { useState, useEffect, useRef } from 'react';

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const frameRate = 1000 / 60; // 60fps
  const totalFrames = Math.round(duration / frameRate);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // ...
      },
      { threshold: 0.7 }
    );
  
    const element = ref.current; // Copy ref.current to a variable
    if (element) {
      observer.observe(element);
    }
  
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [end, duration, totalFrames, frameRate]);

  useEffect(() => {
    let frame = 0;
    let value = 0;
    const interval = setInterval(() => {
      frame++;
      value = easeOutExpo(frame / totalFrames) * end;
      setCount(Math.floor(value));
      if (frame === totalFrames) {
        clearInterval(interval);
      }
    }, frameRate);
    return () => clearInterval(interval);
  }, [end, duration, totalFrames, frameRate]);

  return (
    <div ref={ref}>
      {count}
    </div>
  );
};

export default Counter;