'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import NewsClipping from './NewsClipping';

const CLIPPINGS = [
  {
    date: 'March 2004',
    headline: 'Maharashtra Announces Global Tender For Dharavi',
    body: 'A 239-hectare zone is opened to international developers under the DRP scheme.',
    rotation: 1.2,
  },
  {
    date: 'July 2006',
    headline: 'First Resident Welfare Guidelines Published',
    body: 'The government and community leaders outline criteria for modern rehabilitation units.',
    rotation: -1.5,
  },
  {
    date: 'February 2008',
    headline: 'Mukesh Mehta Appointed Project Consultant',
    body: 'Architect and consultant assigned to co-ordinate redevelopment master plan.',
    rotation: 0.8,
  },
  {
    date: 'September 2009',
    headline: 'Infrastructural Upgrades Bring Clean Water & Sanitation',
    body: 'New pipeline networks and sanitation facilities are completed across major blocks.',
    rotation: -1.0,
  },
  {
    date: 'January 2010',
    headline: 'Dharavi Cultural & Craft Festival Launched',
    body: 'Annual event celebrates local craftsmanship, attracting thousands of global visitors.',
    rotation: 1.5,
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
            ARCHIVE & PAPER TRAILS
          </span>
          <h2
            className="font-display text-black m-0 uppercase"
            style={{ fontSize: 'clamp(30px, 5.5vw, 72px)', letterSpacing: '0.04em' }}
          >
            The Paper Trail
          </h2>
          <div className="mt-4" style={{ height: '2px', backgroundColor: 'var(--nbt-gold)', width: '80px' }} />
          <p className="font-body mt-6 text-gray-600 max-w-[600px] text-sm">
            [A vertical scroll-driven chronicle. Each record stacks sequentially, archiving milestones of citizens resistance.]
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
                  <span className="font-heading font-semibold text-sm" style={{ color: 'var(--nbt-gold)', letterSpacing: '0.12em' }}>
                    {clip.date.toUpperCase()}
                  </span>
                  <span className="font-heading font-bold text-gray-300" style={{ fontSize: '13px' }}>
                    RECORD 0{i + 1}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-2xl text-black leading-snug mb-4">
                  {clip.headline}
                </h3>
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
