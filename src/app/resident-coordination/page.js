'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';

export default function ResidentCoordination() {
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
        </div>
      </section>

      {/* Footer (Reused AboutSection) */}
      <AboutSection />
    </main>
  );
}
