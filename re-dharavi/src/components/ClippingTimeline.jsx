'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CLIPPINGS = [
  {
    date: 'May 15, 2025',
    publisher: 'The Economic Times (Marathi)',
    headline: "Dharavi Rehabilitation Speeds Up: Pre-Monsoon Relocation Appeal; Rent Subsidies, Relocation Support, and Help Centers Available",
    body: "An official from the Dharavi Redevelopment Project (DRP) stated that early relocation will allow construction to start simultaneously in multiple locations, making rehabilitated homes available sooner.",
    link: 'https://marathi.economictimes.com/business-news/rehabilitation-work-in-dharavi-gathers-momentum-pre-monsoon-relocation-rent-subsidies-relocation-assistance-and-help-centers-available/articleshow/130256780.cms',
    rotation: 0.8,
  },
  {
    date: 'June 12, 2025',
    publisher: 'ThePrint',
    headline: "Need moves on Dharavi revamp, work on 1st set of rehabilitation houses to be begin post monsoon",
    body: "The first set of 11,000 tenements, each 350 square feet, will be constructed in Dharavi’s Sector 6, which refers to the Matunga railway land obtained from Railways.",
    link: 'https://theprint.in/india/needle-moves-on-dharavi-revamp-work-on-1st-set-of-rehabilitation-houses-to-be-begin-post-monsoon/2904658/',
    rotation: -1.0,
  },
  {
    date: 'June 20, 2025',
    publisher: 'Mid-day',
    headline: "Dharavi redevelopment project: Dharavi’s redevelopment is our social commitment, says Maharashtra deputy CM Eknath Shinde",
    body: "A day after the master plan of the ambitious Dharavi redevelopment project in Mumbai was given approval, Eknath Shinde said its was govt’s social commitment.",
    link: 'https://share.google/4abPtqlV5deErgri',
    rotation: 1.2,
  },
  {
    date: 'June 25, 2025',
    publisher: 'ABP Live English',
    headline: "‘Not Just Real Estate’: Pranav Adani Outlines 20-Year Vision For Dharavi Transformation",
    body: "He added that this character continues to define the city. 'One thing that I still see is that the people are still full of resilience and dreams and are very entrepreneurial.'",
    link: 'https://share.google/ZPm2nPM7KQBpVu4U9',
    rotation: 1.5,
  },
  {
    date: 'July 2, 2025',
    publisher: 'The New Indian Express',
    headline: "Dharavi Revamp Master Plan Approved: Construction of First Set of Tenements to Begin Post-Monsoon",
    body: "Following the cabinet approval of the master plan, transit and rehabilitation infrastructure development gathers momentum.",
    link: 'https://share.google/5S1RnahtP8pvN34Gq',
    rotation: -1.5,
  },
];

export default function ClippingTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="w-full py-20 md:py-32"
      style={{ backgroundColor: 'var(--nbt-gray)', borderTop: '1px solid rgba(0, 0, 0, 0.05)' }}
    >
      <div className="nbt-container">
        {/* Header */}
        <div className="mb-16">
          <span className="label-tag block mb-4" style={{ color: 'var(--nbt-gold)', fontWeight: 600 }}>
            THE PAPER TRAIL
          </span>
          <h2
            className="font-display text-black m-0 uppercase"
            style={{ fontSize: 'clamp(30px, 5.5vw, 72px)', letterSpacing: '0.04em' }}
          >
            Project Articles & News
          </h2>
          <div className="mt-4" style={{ height: '2px', backgroundColor: 'var(--nbt-gold)', width: '80px' }} />
          <p className="font-body mt-6 text-gray-600 max-w-[600px] text-sm leading-relaxed">
          Stacked key news reports, articles and announcements outlining the milestones of Dharavi’s ongoing redevelopment.
          </p>
        </div>

        {/* Stack Container */}
        <div className="flex flex-col items-center gap-16 w-full max-w-[800px] mx-auto relative">
          {CLIPPINGS.map((clip, i) => (
            <motion.div
              key={i}
              className="sticky w-full"
              style={{
                top: `${100 + i * 90}px`,
                zIndex: 10 + i,
                paddingBottom: '20px',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <div 
                className="bg-white rounded-lg p-8 shadow-md border hover:shadow-lg transition-shadow duration-300 transform"
                style={{ 
                  borderColor: 'rgba(0, 0, 0, 0.06)',
                  rotate: `${clip.rotation}deg`
                }}
              >
                <div className="flex justify-between items-center mb-4 border-b pb-4" style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }}>
                  <span className="font-heading font-semibold text-xs" style={{ color: 'var(--nbt-gold)', letterSpacing: '0.08em' }}>
                    {clip.publisher.toUpperCase()} — {clip.date.toUpperCase()}
                  </span>
                  <span className="font-heading font-bold text-gray-300" style={{ fontSize: '13px' }}>
                    RECORD 0{i + 1}
                  </span>
                </div>
                <a 
                  href={clip.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block no-underline group cursor-pointer mb-4"
                >
                  <h3 className="font-heading font-semibold text-xl md:text-2xl text-black leading-snug m-0 group-hover:text-[var(--brand-rose)] transition-colors duration-200 flex items-center justify-between gap-4">
                    <span>{clip.headline}</span>
                    <svg 
                      className="w-5 h-5 flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:text-[var(--brand-rose)] transition-all duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </h3>
                </a>
                <p className="font-body text-gray-600 text-sm leading-relaxed m-0">
                  {clip.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
