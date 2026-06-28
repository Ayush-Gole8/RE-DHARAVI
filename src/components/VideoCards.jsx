'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const VIDEOS = [
  {
    title: 'The Kumbhars of Kumbharwada: Clay, Coal & Community',
    duration: '4:20',
    speaker: 'Harish Kumbhar',
    bgClass: 'linear-gradient(135deg, #1A1A1A 0%, #333333 100%)',
    overlay: 'Clay works'
  },
  {
    title: '13th Compound: The Global Standard of Plastic Segregation',
    duration: '6:15',
    speaker: 'Ayesha Banu',
    bgClass: 'linear-gradient(135deg, #220816 0%, #4D1234 100%)',
    overlay: 'Recycling Compound'
  },
  {
    title: 'Negotiating the Rent: Commercial Tenancies in Sector II',
    duration: '5:02',
    speaker: 'Vijay Patil',
    bgClass: 'linear-gradient(135deg, #091326 0%, #173059 100%)',
    overlay: 'Cooperative Housing'
  }
];

export default function VideoCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section 
      ref={ref}
      className="w-full nbt-row-padding overflow-hidden"
      style={{ backgroundColor: 'var(--nbt-dark)' }}
    >
      <div className="nbt-container">
        {/* Header */}
        <div className="mb-12">
          <span 
            className="label-tag block mb-4"
            style={{ color: 'var(--nbt-gold)', fontWeight: 600 }}
          >
            DOCUMENTARY VIDEO ARCHIVES
          </span>
          <h2 
            className="font-display m-0 text-white uppercase"
            style={{ fontSize: '72px', letterSpacing: '0.04em' }}
          >
            Voice of Dharavi
          </h2>
          <div className="mt-4" style={{ height: '2px', backgroundColor: 'var(--nbt-gold)', width: '80px' }} />
          <p className="text-gray-400 font-body text-sm mt-6" style={{ letterSpacing: '0.02em' }}>
            [Swipe or Drag to explore the video catalog. Click play to open archival testimonies.]
          </p>
        </div>

        {/* Responsive Scroll-Snap Container */}
        <div 
          className="scroll-snap-x flex gap-6 md:gap-8 w-full overflow-x-auto pb-4 cursor-pointer"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {VIDEOS.map((video, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[290px] sm:w-[360px] md:w-[420px] h-[280px] p-8 rounded-lg flex flex-col justify-between border relative overflow-hidden group shadow-lg"
              style={{ 
                background: video.bgClass,
                borderColor: 'rgba(255, 255, 255, 0.08)',
                scrollSnapAlign: 'start'
              }}
              whileHover={{ scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              {/* Background watermarked text */}
              <div 
                className="absolute right-[-20px] bottom-[-20px] font-display text-white opacity-[0.03] select-none pointer-events-none"
                style={{ fontSize: '150px', lineHeight: 1 }}
              >
                PLAY
              </div>

              {/* Duration Tag */}
              <div className="flex justify-between items-center z-10">
                <span className="font-heading font-semibold text-xs px-3 py-1 rounded bg-white text-black" style={{ letterSpacing: '0.08em' }}>
                  {video.duration} MIN
                </span>
                <span className="text-xs font-ui uppercase" style={{ color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '0.1em' }}>
                  {video.overlay}
                </span>
              </div>

              {/* Title and Speaker */}
              <div className="z-10 mt-auto">
                {/* Play Button Icon */}
                <motion.div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'var(--nbt-gold)' }}
                  whileHover={{ scale: 1.1 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="ml-1">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </motion.div>

                <h3 className="font-heading font-semibold text-white text-lg md:text-xl leading-snug m-0 mb-2">
                  {video.title}
                </h3>
                <p className="font-ui text-xs m-0" style={{ color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '0.05em' }}>
                  TESTIMONY BY: {video.speaker.toUpperCase()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
