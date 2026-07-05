'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';

const GALLERY_ITEMS = [
  { id: 1, src: '/images/RC_1.jpeg' },
  { id: 2, src: '/images/RC_2.jpeg' },
  { id: 3, src: '/images/RC_3.jpeg' },
  { id: 4, src: '/images/RC_4.jpeg' },
  { id: 5, src: '/images/RC_5.jpeg' },
  { id: 6, src: '/images/RC_6.jpeg' },
  { id: 7, src: '/images/RC_7.jpeg' },
  { id: 8, src: '/images/RC_8.jpeg' }
];

export default function ResidentCoordination() {
  const [activeIndex, setActiveIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const galleryContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const galleryItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6, ease: [0.215, 0.610, 0.355, 1.000] } 
    }
  };

  return (
    <main style={{ backgroundColor: 'var(--off-white)', minHeight: '100vh' }}>
      <Navbar />

      {/* Main Content Area */}
      <section 
        className="w-full pt-[140px] pb-20 md:pt-[180px] md:pb-32"
        style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}
      >
        <div 
          className="max-w-editorial mx-auto" 
          style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}
        >
          {/* Header */}
          <div className="mb-16">
            <span 
              className="label-tag block mb-4"
              style={{ color: 'var(--nbt-gold)', fontWeight: 600 }}
            >
              DRP COORDINATION HUB
            </span>
            <h1 
              className="font-display m-0 text-black uppercase"
              style={{ fontSize: 'clamp(38px, 6vw, 76px)', letterSpacing: '0.04em', lineHeight: 1.1 }}
            >
              Resident Coordination
            </h1>
            <div className="mt-6 mb-8" style={{ height: '2px', backgroundColor: 'var(--nbt-gold)', width: '80px' }} />
            <p 
              className="font-body text-gray-700 m-0"
              style={{ 
                fontSize: 'clamp(16px, 1.5vw, 20px)', 
                maxWidth: '750px',
                lineHeight: 1.8
              }}
            >
              This registry offers a dedicated platform for Dharavi residents to track survey registers, verify tenement eligibility, coordinate community consultations, and file official redevelopment appeals.
            </p>
          </div>

          {/* Coordination Modules */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Card 1: DRP Progress Tracker */}
            <motion.div 
              className="p-6 md:p-8 bg-white border rounded shadow-sm flex flex-col justify-between"
              style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }}
              variants={itemVariants}
            >
              <div>
                <div 
                  className="font-heading font-semibold text-xs uppercase tracking-wider mb-4 px-2 py-1 rounded inline-block"
                  style={{ backgroundColor: 'rgba(140, 97, 68, 0.08)', color: 'var(--nbt-gold)' }}
                >
                  Eligibility Registers
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-black mb-4">
                  DRP Eligibility Tracker
                </h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed mb-6">
                  Track DRP (Dharavi Redevelopment Project) survey updates. Verify sector tenement maps, check your family register enrollment status, and retrieve eligibility certificates.
                </p>
              </div>
              <ul className="list-none p-0 m-0 border-t pt-4 flex flex-col gap-3">
                <li className="flex items-center justify-between text-xs font-semibold text-gray-500">
                  <span>Sector I - VI Survey Mapping</span>
                  <span className="text-green-600 bg-green-50 px-1.5 py-0.5 rounded">94% Active</span>
                </li>
                <li className="flex items-center justify-between text-xs font-semibold text-gray-500">
                  <span>Residential Tenements Tallied</span>
                  <span>58,200+ Verified</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 2: Community Council */}
            <motion.div 
              className="p-6 md:p-8 bg-white border rounded shadow-sm flex flex-col justify-between"
              style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }}
              variants={itemVariants}
            >
              <div>
                <div 
                  className="font-heading font-semibold text-xs uppercase tracking-wider mb-4 px-2 py-1 rounded inline-block"
                  style={{ backgroundColor: 'rgba(217, 110, 175, 0.08)', color: '#D96EAF' }}
                >
                  Local Councils
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-black mb-4">
                  Resident Advisory Council
                </h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed mb-6">
                  Access local advisory boards, community council meetings schedules, and connect with designated sector-wise neighborhood coordination officers.
                </p>
              </div>
              <ul className="list-none p-0 m-0 border-t pt-4 flex flex-col gap-3">
                <li className="flex items-center justify-between text-xs font-semibold text-gray-500">
                  <span>Weekly Assembly Meeting</span>
                  <span className="text-black">Saturdays at 4:00 PM</span>
                </li>
                <li className="flex items-center justify-between text-xs font-semibold text-gray-500">
                  <span>Advisory Members Elected</span>
                  <span>42 Local Representatives</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 3: Grievance Registry */}
            <motion.div 
              className="p-6 md:p-8 bg-white border rounded shadow-sm flex flex-col justify-between"
              style={{ borderColor: 'rgba(0, 0, 0, 0.06)' }}
              variants={itemVariants}
            >
              <div>
                <div 
                  className="font-heading font-semibold text-xs uppercase tracking-wider mb-4 px-2 py-1 rounded inline-block"
                  style={{ backgroundColor: 'rgba(18, 4, 56, 0.06)', color: 'var(--brand-indigo)' }}
                >
                  Appeals & Claims
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-black mb-4">
                  Grievance Redressal Registry
                </h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed mb-6">
                  File claims regarding survey mismatch, property certificate queries, or rehabilitation allotment concerns with the independent ombudsman authority.
                </p>
              </div>
              <ul className="list-none p-0 m-0 border-t pt-4 flex flex-col gap-3">
                <li className="flex items-center justify-between text-xs font-semibold text-gray-500">
                  <span>Submitted Grievances Resolved</span>
                  <span className="text-green-600">82.4% Resolved</span>
                </li>
                <li className="flex items-center justify-between text-xs font-semibold text-gray-500">
                  <span>Response SLA Guarantee</span>
                  <span>14 Business Days</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Ground Engagement & Meeting Gallery */}
          <div className="mt-24 md:mt-32">
            <div className="mb-12 text-center">
              <span 
                className="label-tag inline-block mb-3 text-xs tracking-widest font-semibold uppercase"
                style={{ color: 'var(--nbt-gold)' }}
              >
                ON-GROUND ENGAGEMENT
              </span>
              <h2 
                className="font-heading font-bold uppercase m-0 leading-tight"
                style={{
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  letterSpacing: '0.06em',
                  color: 'var(--charcoal)'
                }}
              >
                Community Meetings Album
              </h2>
              <p className="font-body text-sm text-gray-600 mt-3 max-w-[650px] mx-auto">
                Visual updates from the community consultations, resident coordination workshops, and on-ground advisory meetings happening across Dharavi sectors.
              </p>
            </div>

             {/* Grid of Polaroid Cards */}
             <motion.div 
               variants={galleryContainerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: '-60px' }}
               className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
             >
               {GALLERY_ITEMS.map((item, i) => (
                 <motion.div
                   key={item.id}
                   onClick={() => setActiveIndex(i)}
                   variants={galleryItemVariants}
                   whileHover={{ 
                     y: -8, 
                     rotate: i % 2 === 0 ? 1.5 : -1.5,
                     scale: 1.01,
                     transition: { duration: 0.25, ease: 'easeOut' } 
                   }}
                   className="bg-white p-3 pb-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col gap-3 group border border-gray-100"
                 >
                   <div className="relative w-full aspect-square bg-gray-50 rounded-lg overflow-hidden">
                     <Image
                       src={item.src}
                       alt={`Community Consultation Photo ${item.id}`}
                       fill
                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                       className="object-cover transition-transform duration-500 group-hover:scale-105"
                     />
                   </div>
                   <div className="text-center mt-2">
                     <span 
                       className="font-ui text-xs text-gray-500 uppercase tracking-widest italic"
                     >
                       Session Image {item.id}
                     </span>
                   </div>
                 </motion.div>
               ))}
             </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Slider Navigation */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            {/* Close button */}
            <button 
              onClick={() => setActiveIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors focus:outline-none p-2 bg-white/10 hover:bg-white/20 rounded-full z-[10000]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left navigation arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
              }}
              className="absolute left-6 text-white/70 hover:text-white transition-colors focus:outline-none p-3 bg-white/10 hover:bg-white/20 rounded-full z-[10000] cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right navigation arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-6 text-white/70 hover:text-white transition-colors focus:outline-none p-3 bg-white/10 hover:bg-white/20 rounded-full z-[10000] cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Modal Content Frame */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl aspect-[4/3] bg-white p-3 pb-12 rounded-2xl shadow-2xl flex flex-col cursor-default"
            >
              {/* Image box */}
              <div className="relative w-full flex-grow rounded-lg overflow-hidden bg-gray-50">
                <Image
                  src={GALLERY_ITEMS[activeIndex].src}
                  alt={`Community Consultation Photo ${activeIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              {/* Caption */}
              <div className="text-center mt-4">
                <span className="font-heading font-semibold text-sm md:text-base text-gray-800 uppercase tracking-widest">
                  Community Meeting Consultation — Image {activeIndex + 1} of {GALLERY_ITEMS.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer (Reused AboutSection) */}
      <AboutSection />
    </main>
  );
}
