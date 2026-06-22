'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import PullQuote from './PullQuote';
import CalloutStat from './CalloutStat';

export default function EditorialRow({
  ghostNumber,
  label,
  heading,
  body,
  pullQuote,
  statNumber,
  statLabel,
  imageSrc,
  imageAlt,
  reversed = false,
  imageCaption,
  compact = false,
  splitCompact = false,
}) {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Parallax for image
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  if (splitCompact) {
    return (
      <motion.section
        ref={sectionRef}
        className="relative py-4 md:py-8 w-full"
        style={{ backgroundColor: 'var(--off-white)' }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        {/* Ghost callout number */}
        {ghostNumber && (
          <span
            className="ghost-number"
            style={{
              top: '10px',
              left: 'clamp(24px, 5vw, 80px)',
            }}
          >
            {ghostNumber}
          </span>
        )}

        <div
          className="max-w-editorial mx-auto"
          style={{
            paddingLeft: 'clamp(24px, 5vw, 80px)',
            paddingRight: 'clamp(24px, 5vw, 80px)',
          }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left Column (45%): Heading & Image */}
            <div className="w-full md:w-[45%] flex flex-col gap-4">
              {/* Heading */}
              <div className="overflow-hidden mb-2">
                <motion.h3
                  className="font-heading font-bold uppercase m-0 leading-tight"
                  style={{
                    fontSize: 'clamp(28px, 3.5vw, 40px)',
                    letterSpacing: '0.08em',
                    color: 'var(--charcoal)',
                  }}
                  initial={{ y: '100%' }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
                >
                  {heading}
                </motion.h3>
              </div>

              {/* Image Container */}
              <div
                ref={imageRef}
                className="relative overflow-hidden w-full"
                style={{ minHeight: '260px', height: '260px' }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt || 'Documentary photograph'}
                  fill
                  className="object-cover"
                  style={{ filter: 'grayscale(100%) contrast(1.05)' }}
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                {imageCaption && (
                  <span
                    className="absolute bottom-2 left-2 label-tag z-10"
                    style={{
                      fontSize: '10px',
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      padding: '2px 6px',
                    }}
                  >
                    {imageCaption}
                  </span>
                )}
              </div>
            </div>

            {/* Right Column (55%): Label, Paragraph, PullQuote, CalloutStat */}
            <div className="w-full md:w-[55%] flex flex-col gap-4">
              {/* Label */}
              <motion.span
                className="label-tag block"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {label}
              </motion.span>

              {/* Body Paragraph */}
              <motion.p
                className="font-body m-0"
                style={{
                  fontSize: '15px',
                  lineHeight: 1.5,
                  color: 'var(--charcoal)',
                  maxWidth: '540px',
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
              >
                {body}
              </motion.p>

              {/* PullQuote and Stats */}
              {pullQuote && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
                >
                  <PullQuote quote={pullQuote} />
                </motion.div>
              )}

              {statNumber && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
                >
                  <CalloutStat number={statNumber} label={statLabel} />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  const textContent = (
    <div className="relative z-10">
      {/* Label */}
      <motion.span
        className="label-tag block mb-4"
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {label}
      </motion.span>

      {/* Heading - Clip-path slide reveal */}
      <div className="overflow-hidden mb-2">
        <motion.h3
          className="font-heading font-bold uppercase m-0 leading-tight"
          style={{
            fontSize: 'clamp(32px, 4vw, 48px)',
            letterSpacing: '0.08em',
            color: 'var(--charcoal)',
          }}
          initial={{ y: '100%' }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
        >
          {heading}
        </motion.h3>
      </div>

      {/* Body text */}
      <motion.p
        className={`font-body ${compact ? 'mt-3' : 'mt-6'}`}
        style={{
          fontSize: compact ? '15px' : '17px',
          lineHeight: compact ? 1.5 : 1.7,
          color: 'var(--charcoal)',
          maxWidth: '540px',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
      >
        {body}
      </motion.p>

      {/* PullQuote and Stats staggered reveals */}
      {pullQuote && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          <PullQuote quote={pullQuote} />
        </motion.div>
      )}

      {statNumber && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        >
          <CalloutStat number={statNumber} label={statLabel} />
        </motion.div>
      )}
    </div>
  );

  const imageContent = (
    <div
      ref={imageRef}
      className="relative overflow-hidden w-full"
      style={{ minHeight: compact ? '320px' : '500px' }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: parallaxY }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt || 'Documentary photograph'}
          fill
          className="object-cover"
          style={{ filter: 'grayscale(100%) contrast(1.05)' }}
          sizes="(max-width: 768px) 100vw, 45vw"
        />
      </motion.div>
      {imageCaption && (
        <span
          className="absolute bottom-4 left-4 label-tag z-10"
          style={{
            fontSize: '11px',
            backgroundColor: 'rgba(0,0,0,0.6)',
            padding: '4px 8px',
          }}
        >
          {imageCaption}
        </span>
      )}
    </div>
  );

  return (
    <motion.section
      ref={sectionRef}
      className={`relative ${compact ? 'py-4 md:py-8' : 'py-20 md:py-32'}`}
      style={{ backgroundColor: 'var(--off-white)' }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Ghost callout number */}
      {ghostNumber && (
        <span
          className="ghost-number"
          style={{
            top: '-20px',
            left: reversed ? 'auto' : 'clamp(24px, 5vw, 80px)',
            right: reversed ? 'clamp(24px, 5vw, 80px)' : 'auto',
          }}
        >
          {ghostNumber}
        </span>
      )}

      <div
        className="max-w-editorial mx-auto"
        style={{
          paddingLeft: 'clamp(24px, 5vw, 80px)',
          paddingRight: 'clamp(24px, 5vw, 80px)',
        }}
      >
        <div
          className={`flex flex-col ${compact ? 'gap-6' : 'gap-12'} ${
            reversed ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          {/* Text column - 55% */}
          <div className="w-full md:w-[55%] flex flex-col justify-center">
            {textContent}
          </div>

          {/* Image column - 45% */}
          <div className="w-full md:w-[45%]">
            {imageContent}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
