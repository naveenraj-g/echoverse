"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

interface AnimatedCounterProps {
  from: number;
  to: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ from, to, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration: 1,
        onUpdate: (value) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(value).toString();
          }
        },
      });

      return () => controls.stop();
    }
  }, [inView, from, to]);

  return (
    <motion.span
      ref={ref}
      className={`text-2xl font-semibold text-gray-900 dark:text-gray-100 ${className}`}
    >
      {from}
    </motion.span>
  );
};

export default AnimatedCounter;
