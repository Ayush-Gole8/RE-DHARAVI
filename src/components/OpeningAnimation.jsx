'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OpeningAnimation({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scrolling on page load
    document.body.style.overflow = 'hidden';

    // Simulate progress bar going to 100
    const duration = 2000; // 2 seconds loader
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small delay after hitting 100% before exiting
      const delay = setTimeout(() => {
        setIsVisible(false);
        // Re-enable scrolling
        document.body.style.overflow = '';
        if (onComplete) onComplete();
      }, 500);

      return () => clearTimeout(delay);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100vh',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: 'var(--nbt-dark)' }}
        >
          <div className="w-[80vw] max-w-[400px] flex flex-col items-center">
            {/* Title / Logo */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6"
            >
              <h1 
                className="font-display text-white tracking-widest uppercase m-0 leading-none"
                style={{ fontSize: '80px', letterSpacing: '0.15em' }}
              >
                NAYA DHARAVI
              </h1>
              <p 
                className="font-heading uppercase text-white mt-2"
                style={{ 
                  fontSize: '12px', 
                  letterSpacing: '0.3em',
                  color: 'var(--nbt-gold)',
                  fontWeight: 600
                }}
              >
                Citizen Platform & Archive
              </p>
            </motion.div>

            {/* Load bar */}
            <div 
              className="w-full h-[1px] relative overflow-hidden mb-4"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <motion.div 
                className="h-full absolute left-0 top-0"
                style={{ 
                  backgroundColor: 'var(--nbt-gold)', 
                  width: `${progress}%` 
                }}
              />
            </div>

            {/* Percentage indicator */}
            <div className="flex justify-between w-full font-heading text-white" style={{ fontSize: '12px', letterSpacing: '0.1em' }}>
              <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>LOADING CONTENT</span>
              <span className="font-bold">{Math.round(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
