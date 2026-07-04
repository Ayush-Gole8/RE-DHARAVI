'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import VariableProximity from './VariableProximity';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scale map from 1.0 to 1.15 as we scroll down
  const mapScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.15]);
  // Fade out map overlay slightly more as we scroll down (opacity goes from 0.25 to 0.05)
  const mapOpacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.05]);
  // Shift text slightly upwards as we scroll down
  const textY = useTransform(scrollYProgress, [0, 1], [0, -85]);
  // Fade out the scroll indicator arrow when scrolling down
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="cover"
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{
        height: '100vh',
        minHeight: '600px',
        background: 'var(--gradient-brand)',
      }}
    >
      {/* Layer 1: Crimson background - fades in */}
      <motion.div
        className="absolute inset-0"
        style={{ background: 'var(--gradient-brand)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      {/* Layer 2: Aerial map overlay with entry scale transition + scroll parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          scale: mapScale,
          opacity: mapOpacity,
        }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          style={{ width: '100%', height: '100%' }}
        >
          <Image
            src="/images/dharavi-aerial.png"
            alt="Aerial satellite view of Dharavi, a dense urban neighbourhood in Mumbai showing tightly packed buildings and narrow streets"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      {/* Layer 3: Text content with scroll parallax offset */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center w-full text-center"
        style={{
          paddingLeft: '24px',
          paddingRight: '24px',
          maxWidth: '1200px',
          y: textY,
        }}
      >
        {/* "NAYA DHARAVI" - single line centered reveal using VariableProximity */}
        <div className="overflow-hidden mt-2 w-full text-center">
          <motion.h1
            className="text-white leading-none m-0 p-0 text-center uppercase whitespace-nowrap"
            style={{
              fontSize: 'var(--fs-hero)',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap'
            }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <VariableProximity
              label="NAYA DHARAVI"
              className="variable-proximity-hero"
              fromFontVariationSettings="'wght' 700, 'wdth' 75, 'opsz' 10"
              toFontVariationSettings="'wght' 950, 'wdth' 130, 'opsz' 40"
              containerRef={containerRef}
              radius={200}
              falloff="linear"
            />
          </motion.h1>
        </div>

        {/* Sub-label */}
        <motion.p
          className="font-heading text-white mt-6 text-center"
          style={{
            fontWeight: 400,
            fontSize: '22px',
            letterSpacing: '0.04em',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
        >
          The largest human-centric urban regeneration project in Asia
        </motion.p>
      </motion.div>

      {/* Scroll indicator with entry reveal + scroll fade */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity: indicatorOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
