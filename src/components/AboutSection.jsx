'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SOCIAL_LINKS = [
  { 
    name: 'YouTube', 
    url: 'https://youtube.com', 
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.002 3.002 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  },
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/naya.dharavi?igsh=MWhjZ3M5eHVjMDJnbg==', 
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    )
  },
  { 
    name: 'Facebook', 
    url: 'https://www.facebook.com/share/1Amuf2HRqs/', 
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
      </svg>
    )
  }
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <>
      {/* About Content */}
      <section
        id="about"
        ref={ref}
        className="w-full"
        style={{
          backgroundColor: 'var(--nbt-dark)',
          padding: 'clamp(60px, 9vw, 120px) 0',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="nbt-container">
          <div className="nbt-grid-2 items-center">
            {/* Left: Brand & Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span 
                className="label-tag block mb-4"
                style={{ color: 'var(--nbt-gold)', fontWeight: 600 }}
              >
                ABOUT THE ARCHIVE
              </span>
              <h2
                className="font-display text-white m-0 uppercase leading-none"
                style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', letterSpacing: '0.05em' }}
              >
                NAYA DHARAVI
              </h2>
              {/* Bronze bar */}
              <div 
                className="my-6" 
                style={{ height: '2px', backgroundColor: 'var(--nbt-gold)', width: '80px' }} 
              />
              <p
                className="font-body"
                style={{
                  fontSize: '16px',
                  color: '#999999',
                  lineHeight: '1.75',
                  maxWidth: '540px',
                }}
              >
                Naya Dharavi is an independent citizen research platform and digital archive documenting the local trade, architecture, and civic resilience of the Dharavi community in Mumbai. The project serves to amplify local narratives, support transparent housing updates, and catalog historical records of community-led development models.
              </p>
            </motion.div>

            {/* Right: Social Channels Directory */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <h4 
                className="font-heading font-semibold text-white uppercase m-0"
                style={{ letterSpacing: '0.1em', fontSize: '18px' }}
              >
                Connect With Us
              </h4>
              <p style={{ color: '#777777', fontSize: '14px', margin: 0 }}>
                Follow our official social platforms for latest updates on surveys, workshops, public hearings, and local research articles.
              </p>

              {/* Social links row */}
              <div className="flex flex-wrap gap-4 mt-2">
                {SOCIAL_LINKS.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full border text-white transition-all duration-300 hover:scale-105"
                    style={{ 
                      borderColor: 'rgba(255, 255, 255, 0.1)', 
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--nbt-gold)';
                      e.currentTarget.style.color = 'var(--nbt-gold)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    aria-label={`Official ${link.name} account`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Strip */}
      <footer
        className="w-full flex items-center justify-center"
        style={{
          background: '#070707',
          height: '60px',
          borderTop: '1px solid rgba(255, 255, 255, 0.02)',
        }}
      >
        <p
          className="font-heading text-center uppercase m-0"
          style={{
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: '#555555',
            fontWeight: 500
          }}
        >
          NAYA DHARAVI © 2026. ALL RIGHTS RESERVED. IN ASSOCIATION WITH LOCAL CITIZEN COLLECTIVES.
        </p>
      </footer>
    </>
  );
}
