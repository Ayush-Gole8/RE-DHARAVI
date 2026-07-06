'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TABLE_DATA = [
  //{ type: 'Cooperative Societies', count: '85+', activity: 'Shared resource management' },
  { type: '350 sq.ft. Homes', count: '11,000+', activity: 'Rehabilitated tenements for eligible residents' },
  { type: 'Open Green Spaces', count: 'City-scale', activity: 'Parks, gardens & public recreational zones' },
  { type: 'Modern Hospital', count: 'Multi-speciality', activity: 'Accessible healthcare for all residents' },
  { type: 'School & Education', count: 'Sector-wide', activity: 'Quality schooling & skill development centres' },
  //{ type: 'Registered Industries', count: '5,000+', activity: 'Waste, manufacturing & export' },
  { type: 'Industrial Area', count: 'Dedicated zone', activity: 'Preserved livelihoods & commercial hubs' },
];

export default function CoopTable({ compact = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className={`w-full ${compact ? 'py-4 md:py-8' : 'py-20 md:py-32'}`}
      style={{ backgroundColor: 'var(--off-white)' }}
    >
      <div
        className={`max-w-editorial mx-auto ${compact ? 'pt-[30px] md:pt-[100px]' : ''}`}
        style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}
      >
        <div className={`flex flex-col md:flex-row ${compact ? 'gap-6 md:gap-8' : 'gap-12 md:gap-16'}`}>
          {/* Text column */}
          <motion.div
            className="w-full md:w-[45%] flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className={`label-tag block ${compact ? 'mb-2' : 'mb-4'}`}>COMMUNITY & INFRASTRUCTURE</span>
            <h2
              className="font-heading font-bold uppercase m-0 leading-tight"
              style={{
                fontSize: compact ? '28px' : 'clamp(32px, 4vw, 42px)',
                letterSpacing: '0.08em',
                color: 'var(--charcoal)',
              }}
            >
              The Self-Organised City
            </h2>
            <p
              className={`font-body ${compact ? 'mt-2' : 'mt-6'}`}
              style={{
                fontSize: compact ? '15px' : '17px',
                lineHeight: 1.7,
                color: 'var(--charcoal)',
              }}
            >
              Dharavi&apos;s informal economy is structured through cooperative societies and registered industries, which are preserved and integrated with modern housing, green spaces, healthcare, and schooling in the redevelopment plan.
            </p>
          </motion.div>

          {/* Table column */}
          <motion.div
            className="w-full md:w-[55%]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="overflow-x-auto">
              <table
                className="w-full border-collapse table-fixed md:table-auto"
                style={{ minWidth: '100%' }}
                role="table"
                aria-label="Dharavi community structures data"
              >
                <thead>
                  <tr style={{ background: 'var(--gradient-brand)' }}>
                    <th
                      className="text-left font-ui font-semibold text-white uppercase text-[10px] sm:text-xs p-2 sm:p-3 md:p-4 w-[40%] sm:w-[35%]"
                      style={{
                        letterSpacing: '0.08em',
                      }}
                    >
                      Feature
                    </th>
                    <th
                      className="text-left font-ui font-semibold text-white uppercase text-[10px] sm:text-xs p-2 sm:p-3 md:p-4 w-[60%] sm:w-[65%]"
                      style={{
                        letterSpacing: '0.08em',
                      }}
                    >
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_DATA.map((row, i) => (
                    <motion.tr
                      key={i}
                      style={{
                        backgroundColor: i % 2 === 0 ? 'var(--cream)' : '#FFFFFF',
                        borderBottom: '1px solid var(--border-table)',
                        cursor: 'default',
                      }}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.25 + i * 0.1, ease: 'easeOut' }}
                      whileHover={{ 
                        backgroundColor: 'rgba(140, 0, 68, 0.05)',
                        scale: 1.015,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                      }}
                    >
                      <td
                        className="font-ui text-xs sm:text-sm p-2 sm:p-3 md:p-4 break-words"
                        style={{
                          color: 'var(--charcoal)',
                          fontWeight: 500,
                        }}
                      >
                        {row.type}
                      </td>
                      <td
                        className="font-ui text-xs sm:text-sm p-2 sm:p-3 md:p-4 break-words"
                        style={{
                          color: 'var(--charcoal)',
                        }}
                      >
                        {row.activity}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
