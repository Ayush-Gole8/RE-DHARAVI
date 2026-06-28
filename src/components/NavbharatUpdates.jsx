'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ARTICLES = [
  {
    date: 'June 18, 2026',
    title: 'Survey of Non-Resident Tenancies Commences in Sector III',
    summary: 'Official survey teams begin registration verification for commercial and warehouse units in Sector III, outlining eligible carpet spaces.',
    category: 'SURVEY UPDATES',
    link: '#',
  },
  {
    date: 'May 24, 2026',
    title: 'Government Guidelines for Eligible Industrial Livelihoods',
    summary: 'The Urban Development Department releases a clarified list of eligible small-scale industries and household businesses for alternative locations.',
    category: 'POLICY UPDATE',
    link: '#',
  },
  {
    date: 'April 09, 2026',
    title: 'Community Consultation of Master Infrastructure Plans',
    summary: 'Stakeholders review proposed roads, water treatment plans, and common spaces for Sector IV and Transit Camps.',
    category: 'INFRASTRUCTURE',
    link: '#',
  },
];

export default function NavbharatUpdates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section 
      ref={ref}
      className="w-full nbt-row-padding"
      style={{ backgroundColor: 'var(--nbt-gray)', borderTop: '1px solid rgba(0, 0, 0, 0.05)' }}
    >
      <div className="nbt-container">
        {/* Header */}
        <div className="mb-12">
          <span 
            className="label-tag block mb-4"
            style={{ color: 'var(--nbt-gold)', fontWeight: 600 }}
          >
            NAVBHARAT UPDATES & NEWS
          </span>
          <h2 
            className="font-display m-0 text-black uppercase"
            style={{ fontSize: '72px', letterSpacing: '0.04em' }}
          >
            Project Articles & News
          </h2>
          <div className="mt-4" style={{ height: '2px', backgroundColor: 'var(--nbt-gold)', width: '80px' }} />
        </div>

        {/* Articles Grid */}
        <div className="nbt-grid-3">
          {ARTICLES.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col p-6 bg-white border rounded shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }}
            >
              {/* Category / Date Tag */}
              <div className="flex items-center justify-between mb-4">
                <span 
                  className="font-heading font-semibold uppercase text-xs"
                  style={{ color: 'var(--nbt-gold)', letterSpacing: '0.12em' }}
                >
                  {article.category}
                </span>
                <span className="text-xs text-gray-400" style={{ fontFamily: 'var(--font-ui)' }}>
                  {article.date}
                </span>
              </div>

              {/* Title */}
              <h3 
                className="font-heading font-semibold text-xl text-black leading-snug mb-3 hover:text-gray-700 transition-colors duration-200"
                style={{ minHeight: '52px' }}
              >
                <a href={article.link} className="no-underline text-black">
                  {article.title}
                </a>
              </h3>

              {/* Summary */}
              <p 
                className="font-body text-sm mb-6 flex-grow"
                style={{ color: '#555555', lineHeight: 1.6 }}
              >
                {article.summary}
              </p>

              {/* Read More link */}
              <a 
                href={article.link}
                className="font-heading font-semibold uppercase text-xs flex items-center gap-2 mt-auto no-underline tracking-wider hover:opacity-60 transition-opacity duration-200"
                style={{ color: 'var(--nbt-gold)' }}
              >
                Read Article
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
