'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const INDUSTRIES = [
  {
    name: 'Pottery (Kumbharwada)',
    description: 'The historic potter community shaping clay vessels, lanterns, and structural ceramics, operating across generational kiln compound sectors.',
    image: '/images/dharavi-pottery.png',
  },
  {
    name: 'Recycling Hub (13th Compound)',
    description: 'Dharavi\'s plastic and solid waste reclamation network, transforming massive industrial waste from across Mumbai back into raw pellets.',
    image: '/images/dharavi-street.png',
  },
  {
    name: 'Leather Artisans',
    description: 'High-quality tanneries and manufacturing units crafting premium luggage, accessories, and garments for export.',
    image: '/images/dharavi-rooftop.png',
  },
  {
    name: 'Garment & Textiles',
    description: 'Vibrant local micro-factories weaving cotton, screen-printing designs, and tailoring garments distributed throughout regional markets.',
    image: '/images/dharavi-street.png',
  },
  {
    name: 'Food Processing',
    description: 'Tightly coordinated bakeries and snack makers producing traditional items like chikki and papads shipped daily across the city.',
    image: '/images/dharavi-pottery.png',
  },
  {
    name: 'Metal & Fabrication',
    description: 'Small recycling refineries and custom ironmongery workshops engineering parts and welding structural goods.',
    image: '/images/dharavi-rooftop.png',
  },
];

function IndustryCard({ industry, i, isInView }) {
  const [expanded, setExpanded] = useState(false);

  const hasBracket = industry.name.includes('(');
  const mainName = hasBracket ? industry.name.substring(0, industry.name.indexOf(' (')) : industry.name;
  const bracketText = hasBracket ? industry.name.substring(industry.name.indexOf(' (')) : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      onClick={() => setExpanded(!expanded)}
      className="flex flex-col group overflow-hidden border rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer md:cursor-default"
      style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }}
    >
      {/* Image box */}
      <div className={`relative w-full transition-all duration-300 ${expanded ? 'h-[90px] sm:h-[120px]' : 'h-[110px] sm:h-[165px]'} md:h-[220px] overflow-hidden bg-gray-100`}>
        <Image
          src={industry.image}
          alt={`Black and white documentary photo representing ${industry.name} industry`}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ filter: 'grayscale(100%) contrast(1.05)' }}
        />
        <div 
          className="absolute inset-0 bg-black opacity-10 transition-opacity duration-300 group-hover:opacity-20"
        />
      </div>

      {/* Text box */}
      <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow bg-white">
        <div className="flex justify-between items-start md:block">
          <h3 className={`font-heading font-semibold text-sm sm:text-base md:text-lg text-black mb-0 md:mb-3 pr-2 md:pr-0 leading-tight ${expanded ? '' : 'line-clamp-1 md:line-clamp-none'}`}>
            {mainName}
            {hasBracket && (
              <span className={expanded ? 'inline' : 'hidden md:inline'}>
                {bracketText}
              </span>
            )}
          </h3>
          <div 
            className="md:hidden text-gray-400 flex-shrink-0 transition-transform duration-300" 
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </div>
        
        <div 
          className={`overflow-hidden transition-all duration-300 md:max-h-[500px] md:opacity-100 md:mt-0 ${expanded ? 'max-h-[200px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}
        >
          <p 
            className="font-body text-[11px] sm:text-xs md:text-sm text-gray-600 m-0"
            style={{ lineHeight: 1.5 }}
          >
            {industry.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function EntrepreneurialSpirit() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section 
      ref={ref}
      className="w-full nbt-row-padding"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="nbt-container">
        {/* Header */}
        <div className="mb-12">
          <span 
            className="label-tag block mb-4"
            style={{ color: 'var(--nbt-gold)', fontWeight: 600 }}
          >
            LOCAL ECONOMY
          </span>
          <h2 
            className="font-display m-0 text-black uppercase"
            style={{ fontSize: 'clamp(32px, 5.5vw, 72px)', letterSpacing: '0.04em' }}
          >
            Dharavi Entrepreneurial Spirit
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
            Dharavi is a self-organized economic generator, producing goods across several key cottage industries. Explore the sectors that comprise this resilient production model.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 items-start">
          {INDUSTRIES.map((industry, i) => (
            <IndustryCard key={i} industry={industry} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
