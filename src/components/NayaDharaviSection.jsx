'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PILLARS = [
  {
    number: '01',
    title: 'Housing Information',
    points: [
      { label: 'Eligibility', text: 'Free homes for eligible ground floor residents residing before Jan 1, 2000.' },
      { label: 'Rehousing 2000-2011', text: 'Residents between 2000 and 2011 are eligible for 300 sq. ft. homes inside or outside Dharavi for a nominal payment of Rs. 2.5 Lac.' },
      { label: 'Home Layout', text: 'Safe, modern homes featuring 350 sq. ft. carpet area for the first time in slum rehabilitation history (50 sq. ft. larger than standard rehab norms).' }
    ]
  },
  {
    number: '02',
    title: 'Essential Amenities',
    points: [
      { label: 'Society Infrastructure', text: 'Elevators and medical stretcher lifts in all high-rise buildings, advanced fire-fighting systems, and secure cabins.' },
      { label: 'Utility & Access', text: 'Piped gas infrastructure, internal roads, paved footpaths, street lighting, and well-lit common areas.' },
      { label: 'Surroundings & Recreation', text: 'Seamlessly connected neighborhoods with walkable streets, open space networks, central parks, landscape gardens, playgrounds, and adequate parking spaces.' }
    ]
  },
  {
    number: '03',
    title: 'Local Business Support',
    points: [
      { label: 'Cottage Industries', text: "Protection and integration of Dharavi's vibrant local shops, cottage industries, and local markets." },
      { label: 'Commercial Space', text: 'Well-planned commercial offices and industrial spaces to sustain the estimated $650M annual economic output.' },
      { label: 'Livelihood Security', text: 'Dedicated support to help small businesses and local entrepreneurs relocate and grow in rehabilitation phases.' }
    ]
  },
  {
    number: '04',
    title: 'Project Updates',
    points: [
      { label: 'Core Mission', text: 'Redevelopment aims to provide safe homes, clean water, proper drainage, and long-term security.' },
      { label: 'Phased Rehabilitation', text: 'Rehabilitation will happen in phases within Dharavi (specifically pin codes 400017 and 400019) to minimize displacement.' },
      { label: 'Culture Preservation', text: 'Core commitment to protect the rich community fabric, local culture, and livelihoods during construction.' }
    ]
  },
  {
    number: '05',
    title: 'Community Events',
    points: [
      { label: 'Social Hubs', text: "Access to dedicated community spaces, open gardens, children's play areas, and playgrounds." },
      { label: 'Coordination Forums', text: 'Structured coordination portals, consultation forums, and public hearings for master infrastructure plans.' },
      { label: 'Cultural Workshops', text: 'Shared spaces for resident coordination, cultural programs, and local workshops.' }
    ]
  },
  {
    number: '06',
    title: 'Youth Opportunities',
    points: [
      { label: 'Educational Facilities', text: 'Modern local schools with safe playgrounds and state-of-the-art learning environments.' },
      { label: 'Skill Training', text: "Specialized skill-building programs and vocational training centers to prepare Dharavi's youth for jobs in the formal economy." },
      { label: 'Local Employment', text: 'Prioritized job opportunities for young residents within the redevelopment project and commercial sectors.' }
    ]
  }
];

export default function NayaDharaviSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const headerRef = useRef(null);
  const pillarsRef = useRef(null);
  const missionRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.2 });
  const pillarsInView = useInView(pillarsRef, { once: true, amount: 0.1 });
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });

  return (
    <section id="naya-dharavi" className="w-full">

      {/* ── Part 01: Header ── */}
      <div
        ref={headerRef}
        className="w-full"
        style={{
          backgroundColor: '#ffffff',
          padding: 'clamp(60px, 8vw, 100px) clamp(24px, 5vw, 80px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
        }}
      >
        <div className="max-w-editorial mx-auto">
          <motion.span
            className="label-tag block mb-6"
            style={{ color: 'var(--nbt-gold)' }}
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            COMMUNITY PLATFORM
          </motion.span>

          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
            {/* Left: Display heading */}
            <motion.div
              className="md:w-[45%]"
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
                <h2
                  className="font-display leading-none m-0 flex flex-wrap md:flex-col gap-x-3"
                  style={{ fontSize: 'clamp(52px, 12vw, 160px)', letterSpacing: '0.03em' }}
                >
                  <span className="text-black">NAYA</span>
                  <span style={{ color: 'var(--nbt-gold)' }}>DHARAVI</span>
                </h2>
            </motion.div>

            {/* Right: Body copy */}
            <motion.div
              className="md:w-[55%] flex flex-col justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p
                className="font-body text-black"
                style={{
                  fontSize: 'clamp(16px, 1.4vw, 20px)',
                  color: '#444444',
                  lineHeight: 1.75,
                }}
              >
                Naya Dharavi is the trusted platform for the residents of Dharavi, offering project information, updates, guidance and support - ensuring every Dharavikar stays informed, connected and empowered throughout the redevelopment journey.
              </p>
              {/* Gold rule */}
              <motion.hr
                className="border-none m-0"
                style={{
                  height: '2px',
                  backgroundColor: 'var(--nbt-gold)',
                  maxWidth: '80px',
                  transformOrigin: 'left',
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={headerInView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ delay: 0.7, duration: 0.5 }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Part 02: What We Cover ── */}
      <div
        ref={pillarsRef}
        className="w-full py-20 md:py-32"
        style={{ backgroundColor: 'var(--off-white)' }}
      >
        <div
          className="max-w-editorial mx-auto"
          style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}
        >
          {/* Section label + heading */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="label-tag block mb-4">WHAT WE COVER</span>
            <h3
              className="font-heading font-bold uppercase m-0 leading-tight"
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                letterSpacing: '0.08em',
                color: 'var(--charcoal)',
              }}
            >
              Six Areas of Focus
            </h3>
          </motion.div>

          {/* Desktop Tabbed Layout (visible on md and above) */}
          <div className="hidden md:flex flex-row gap-12 mt-12 items-stretch min-h-[450px]">
            {/* Left Column (40%): Tab Buttons */}
            <div className="w-[40%] flex flex-col justify-between border-r border-gray-100 pr-8">
              <div className="flex flex-col gap-2">
                {PILLARS.map((pillar, i) => {
                  const isActive = (openIndex === null && i === 0) || openIndex === i;
                  return (
                    <button
                      key={pillar.number}
                      onClick={() => setOpenIndex(i)}
                      className="w-full text-left py-4 px-6 rounded-xl flex items-center gap-6 transition-all duration-300 focus:outline-none"
                      style={{
                        backgroundColor: isActive ? 'var(--cream)' : 'transparent',
                        boxShadow: isActive ? '0 4px 15px rgba(0,0,0,0.02)' : 'none',
                        borderLeft: isActive ? '4px solid var(--brand-rose)' : '4px solid transparent',
                      }}
                    >
                      <span
                        className="font-heading font-bold text-base md:text-lg transition-colors duration-300"
                        style={{
                          color: isActive ? 'var(--brand-rose)' : 'var(--brand-magenta)',
                          opacity: isActive ? 1 : 0.75,
                        }}
                      >
                        {pillar.number}
                      </span>
                      <span
                        className="font-heading font-bold uppercase text-sm sm:text-base transition-colors duration-300"
                        style={{
                          color: isActive ? 'var(--brand-rose)' : 'var(--charcoal)',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {pillar.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column (60%): Detailed Content Area */}
            <div className="w-[60%] pl-8 flex flex-col justify-center">
              <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-sm min-h-[380px] flex flex-col justify-center relative overflow-hidden">
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-magenta/5 to-transparent rounded-bl-full pointer-events-none" />
                
                {/* Active Content rendering */}
                {PILLARS.map((pillar, i) => {
                  const isActive = (openIndex === null && i === 0) || openIndex === i;
                  if (!isActive) return null;
                  return (
                    <motion.div
                      key={pillar.number}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="flex flex-col gap-6"
                    >
                      {/* Active Pillar Header */}
                      <div className="flex items-center gap-4">
                        <span
                          className="font-heading font-bold text-3xl"
                          style={{ color: 'var(--brand-magenta)', opacity: 0.35 }}
                        >
                          {pillar.number}
                        </span>
                        <h4 className="font-heading font-bold uppercase text-xl md:text-2xl text-black m-0 tracking-wide">
                          {pillar.title}
                        </h4>
                      </div>

                      {/* Divider */}
                      <div className="w-16 h-0.5 bg-brand-rose" />

                      {/* Points list */}
                      <div className="flex flex-col gap-5">
                        {pillar.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex flex-col gap-1">
                            <span
                              className="font-ui uppercase text-xs font-semibold tracking-wider"
                              style={{ color: 'var(--nbt-gold)' }}
                            >
                              {pt.label}
                            </span>
                            <p className="font-body text-sm md:text-base text-gray-700 m-0 leading-relaxed">
                              {pt.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Accordion Stack (hidden on md and above) */}
          <div className="md:hidden flex flex-col mt-6 w-full">
            {PILLARS.map((pillar, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={pillar.number}
                  className="w-full border-t last:border-b transition-all duration-300"
                  style={{ borderColor: 'var(--border-table)' }}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full py-5 flex items-center justify-between text-left focus:outline-none group transition-colors duration-200 hover:bg-black/[0.01] px-2 rounded-lg my-1"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      {/* Number Accent */}
                      <span
                        className="font-heading font-bold text-base transition-colors duration-300"
                        style={{
                          color: isOpen ? 'var(--brand-rose)' : 'var(--brand-magenta)',
                          opacity: isOpen ? 1 : 0.75,
                        }}
                      >
                        {pillar.number}
                      </span>
                      {/* Title */}
                      <span
                        className="font-heading font-bold uppercase text-sm transition-colors duration-300"
                        style={{
                          color: isOpen ? 'var(--brand-rose)' : 'var(--charcoal)',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {pillar.title}
                      </span>
                    </div>
                    {/* Toggle Icon */}
                    <div
                      className="text-charcoal transition-transform duration-300 flex-shrink-0"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: isOpen ? 'var(--brand-rose)' : 'var(--charcoal)',
                      }}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Accordion Body */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      isOpen
                        ? { height: 'auto', opacity: 1, marginBottom: 16 }
                        : { height: 0, opacity: 0, marginBottom: 0 }
                    }
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="pl-8 pr-2 flex flex-col gap-4">
                      {pillar.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex flex-col gap-0.5">
                          <span
                            className="font-ui uppercase text-[10px] font-semibold"
                            style={{ color: 'var(--nbt-gold)', letterSpacing: '0.05em' }}
                          >
                            {pt.label}
                          </span>
                          <p
                            className="font-body text-xs m-0 text-gray-700"
                            style={{ lineHeight: 1.5 }}
                          >
                            {pt.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      {/* ── Part 03: Mission Statement ── */}
      <div
        ref={missionRef}
        className="w-full"
        style={{
          backgroundColor: 'var(--charcoal)',
          padding: 'clamp(60px, 10vw, 120px) clamp(24px, 5vw, 80px)',
        }}
      >
        <div className="max-w-editorial mx-auto">
          {/* Statements */}
          {[
            'NAYA DHARAVI IS NOT A BROADCAST.',
            'IT IS A CONVERSATION.',
            'EVERY RESIDENT DESERVES TO BE INFORMED.',
            'EVERY VOICE DESERVES TO BE HEARD.',
          ].map((line, i) => (
            <motion.p
              key={i}
              className="font-heading font-bold uppercase m-0 leading-tight"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 52px)',
                color: 'white',
                lineHeight: 1.1,
                marginBottom: '14px',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.18, duration: 0.5, ease: 'easeOut' }}
            >
              {line}
            </motion.p>
          ))}

          {/* Red rule */}
          <motion.hr
            className="border-none mt-12 mb-6"
            style={{
              height: '2px',
              backgroundColor: 'var(--orange-accent)',
              maxWidth: '400px',
              transformOrigin: 'left',
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={missionInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.6 }}
          />

          {/* Attribution */}
          <motion.p
            className="font-ui italic"
            style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.5)',
            }}
            initial={{ opacity: 0 }}
            animate={missionInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            — Naya Dharavi, A Community Platform
          </motion.p>
        </div>
      </div>

    </section>
  );
}
