'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const SECTORS = [
  {
    slug: 'sector-1',
    name: 'Sector I',
    desc: 'The southern entry point featuring mixed commercial establishments, residential blocks, and immediate proximity to Matunga local transit.',
    highlightPath: 'M 10 70 L 60 70 L 60 110 L 10 110 Z',
    image: '/images/dharavi-street.png',
  },
  {
    slug: 'sector-2',
    name: 'Sector II',
    desc: 'A dense cluster hosting both early transit housing campuses and long-standing local residential chawl societies.',
    highlightPath: 'M 70 70 L 120 70 L 120 110 L 70 110 Z',
    image: '/images/dharavi-rooftop.png',
  },
  {
    slug: 'sector-3',
    name: 'Sector III',
    desc: 'Host to key municipal institutions, local schools, and major commercial leather and textile packaging businesses.',
    highlightPath: 'M 130 70 L 180 70 L 180 110 L 130 110 Z',
    image: '/images/dharavi-pottery.png',
  },
  {
    slug: 'sector-4',
    name: 'Sector IV',
    desc: 'The historic pottery village of Kumbharwada and the traditional fishing community of Koliwada. High artisan density.',
    highlightPath: 'M 40 20 L 110 20 L 110 60 L 40 60 Z',
    image: '/images/dharavi-pottery.png',
  },
  {
    slug: 'sector-5',
    name: 'Sector V',
    desc: 'Bordering the Mahim nature park and creek, characterized by diverse household plastic recycling compound mills.',
    highlightPath: 'M 120 20 L 170 20 L 170 60 L 120 60 Z',
    image: '/images/dharavi-street.png',
  },
  {
    slug: 'sector-6',
    name: 'Sector VI',
    desc: 'Features approximately 35 acres of railway land in Matunga, including Ganesh Nagar and Meghwadi, designated for initial rehabilitation housing.',
    highlightPath: 'M 10 20 L 35 20 L 35 60 L 10 60 Z',
    image: '/images/dharavi-street.png',
  },
];

export default function DiversityCulture() {
  const [openSector, setOpenSector] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
            DIVERSITY IN CULTURE
          </span>
          <h2 
            className="font-display m-0 text-black uppercase"
            style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', letterSpacing: '0.04em' }}
          >
            Sectors & Neighborhood Directory
          </h2>
          <div className="mt-4" style={{ height: '2px', backgroundColor: 'var(--nbt-gold)', width: '80px' }} />
          <p 
            className="font-body mt-6"
            style={{ 
              fontSize: '16px', 
              color: '#555555', 
              maxWidth: '700px',
              lineHeight: 1.75
            }}
          >
            Dharavi is not uniform; it is divided into six distinct sectors, each harboring unique religious congregations, regional dialects, and specialized trades.
          </p>
        </div>

        {/* Desktop Sectors Grid (visible on md and above) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {SECTORS.map((sector, i) => (
            <motion.div
              key={sector.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col bg-white border rounded shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }}
            >
              {/* Image with mini-map inset */}
              <div className="relative w-full h-[110px] sm:h-[150px] md:h-[200px] bg-gray-100">
                <Image
                  src={sector.image}
                  alt={`Photograph of ${sector.name}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                  style={{ filter: 'grayscale(100%)' }}
                />
                
                {/* SVG Mini-map inset */}
                <div 
                  className="absolute bottom-3 right-3 p-2 rounded hidden sm:block"
                  style={{ 
                    backgroundColor: 'rgba(12, 12, 12, 0.85)', 
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <svg width="60" height="40" viewBox="0 0 200 130" className="w-auto h-[32px]">
                    <rect x="5" y="5" width="190" height="120" rx="3" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="2" />
                    <path d="M 10 70 L 60 70 L 60 110 L 10 110 Z" fill="rgba(255,255,255,0.15)" />
                    <path d="M 70 70 L 120 70 L 120 110 L 70 110 Z" fill="rgba(255,255,255,0.15)" />
                    <path d="M 130 70 L 180 70 L 180 110 L 130 110 Z" fill="rgba(255,255,255,0.15)" />
                    <path d="M 40 20 L 110 20 L 110 60 L 40 60 Z" fill="rgba(255,255,255,0.15)" />
                    <path d="M 120 20 L 170 20 L 170 60 L 120 60 Z" fill="rgba(255,255,255,0.15)" />
                    <path d="M 10 20 L 35 20 L 35 60 L 10 60 Z" fill="rgba(255,255,255,0.15)" />
                    <path d={sector.highlightPath} fill="var(--nbt-gold)" />
                  </svg>
                </div>
              </div>

              {/* Information */}
              <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-semibold text-sm sm:text-base md:text-lg text-black mb-1 md:mb-3">
                  {sector.name}
                </h3>
                <p 
                  className="font-body text-[11px] sm:text-xs md:text-sm mb-3 md:mb-6 flex-grow text-gray-600"
                  style={{ lineHeight: 1.5 }}
                >
                  {sector.desc}
                </p>

                {/* View Details CTA */}
                <Link 
                  href={`/sectors/${sector.slug}`}
                  className="font-heading font-semibold uppercase text-[10px] sm:text-xs inline-flex items-center gap-1 md:gap-2 no-underline tracking-wider hover:opacity-60 transition-opacity duration-200 mt-2 md:mt-auto"
                  style={{ color: 'var(--nbt-gold)' }}
                >
                  Explore Neighborhood
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Sectors Accordion Stack (hidden on md and above) */}
        <div className="md:hidden flex flex-col gap-4 w-full mt-6">
          {SECTORS.map((sector, i) => {
            const isOpen = openSector === sector.slug;
            return (
              <div
                key={sector.slug}
                className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                style={{ borderColor: 'rgba(0, 0, 0, 0.08)' }}
              >
                {/* Sector Header Button */}
                <button
                  onClick={() => setOpenSector(isOpen ? null : sector.slug)}
                  className="w-full p-4 flex items-center justify-between text-left focus:outline-none transition-colors duration-200 hover:bg-black/[0.01]"
                >
                  <span className="font-heading font-semibold text-sm text-black">
                    {sector.name}
                  </span>
                  <div
                    className="text-gray-500 transition-transform duration-300"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      color: isOpen ? 'var(--nbt-gold)' : 'var(--charcoal)',
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

                {/* Expanded Sector Content */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    isOpen
                      ? { height: 'auto', opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="p-4 border-t border-gray-50 flex flex-col gap-4 bg-gray-50/30">
                    {/* Image with mini-map inset */}
                    <div className="relative w-full h-[130px] rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={sector.image}
                        alt={`Photograph of ${sector.name}`}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        style={{ filter: 'grayscale(100%)' }}
                      />
                    </div>

                    {/* Description & Link */}
                    <div className="flex flex-col gap-3 flex-grow">
                      <p className="font-body text-xs m-0 text-gray-700 leading-relaxed">
                        {sector.desc}
                      </p>
                      
                      <Link 
                        href={`/sectors/${sector.slug}`}
                        className="font-heading font-semibold uppercase text-[10px] inline-flex items-center gap-1.5 no-underline tracking-wider hover:opacity-60 transition-opacity duration-200 mt-1"
                        style={{ color: 'var(--nbt-gold)' }}
                      >
                        Explore Neighborhood
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
