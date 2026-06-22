'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function NewsClipping({ date, headline, body, rotation = 0 }) {
  // Motion values to track mouse coordinate percentage inside the card (centered at 0.5)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Map mouse coordinate offset to subtle rotation angles (-12 to 12 degrees)
  const rotateX = useTransform(y, [0, 1], [12, -12]);
  const rotateY = useTransform(x, [0, 1], [-12, 12]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width);
    y.set(mouseY / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div style={{ perspective: '1000px', padding: '12px 0' }}>
      <motion.article
        className="relative flex-shrink-0 cursor-default"
        style={{
          width: '280px',
          minHeight: '360px',
          backgroundColor: 'var(--cream)',
          border: '1px solid var(--paper-border)',
          borderRadius: '2px',
          rotateX: rotateX,
          rotateY: rotateY,
          rotateZ: rotation,
          transformStyle: 'preserve-3d',
          padding: '24px',
          /* Paper texture via CSS noise */
          backgroundImage: `
            repeating-radial-gradient(
              circle at 17% 32%,
              rgba(0,0,0,0.015) 0px,
              transparent 1px
            ),
            repeating-radial-gradient(
              circle at 62% 78%,
              rgba(0,0,0,0.01) 0px,
              transparent 1px
            ),
            repeating-radial-gradient(
              circle at 84% 12%,
              rgba(0,0,0,0.012) 0px,
              transparent 1px
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.04,
          y: -10,
          boxShadow: '12px 18px 36px rgba(0, 0, 0, 0.28)',
        }}
        initial={{ boxShadow: '4px 6px 20px rgba(0, 0, 0, 0.15)' }}
        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        tabIndex={0}
        role="article"
        aria-label={`${date} - ${headline}`}
      >
        {/* Date tag floating in 3D */}
        <span
          className="font-ui block uppercase"
          style={{
            fontSize: '11px',
            letterSpacing: '0.12em',
            color: 'var(--orange-accent)',
            fontWeight: 500,
            transform: 'translateZ(30px)',
          }}
        >
          {date}
        </span>

        {/* Horizontal rule floating in 3D */}
        <hr
          className="my-3"
          style={{
            border: 'none',
            borderTop: '1px solid var(--paper-border)',
            transform: 'translateZ(20px)',
          }}
        />

        {/* Headline floating in 3D */}
        <h4
          className="font-newspaper m-0"
          style={{
            fontSize: '18px',
            color: 'var(--charcoal)',
            lineHeight: 1.3,
            transform: 'translateZ(40px) scale(0.95)',
          }}
        >
          {headline}
        </h4>

        {/* Body paragraph floating in 3D */}
        <p
          className="font-newspaper mt-4"
          style={{
            fontSize: '13px',
            color: '#444444',
            lineHeight: 1.6,
            transform: 'translateZ(25px)',
          }}
        >
          {body}
        </p>
      </motion.article>
    </div>
  );
}
