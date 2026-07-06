'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SectionDivider from '@/components/SectionDivider';
import EditorialRow from '@/components/EditorialRow';
import LineChartPanel from '@/components/LineChartPanel';
import ClippingTimeline from '@/components/ClippingTimeline';
import CoopTable from '@/components/CoopTable';
import NayaDharaviSection from '@/components/NayaDharaviSection';
import AboutSection from '@/components/AboutSection';

// New Components
import OpeningAnimation from '@/components/OpeningAnimation';
import GrowthTimeline from '@/components/GrowthTimeline';
import EntrepreneurialSpirit from '@/components/EntrepreneurialSpirit';
import DiversityCulture from '@/components/DiversityCulture';
import VideoCards from '@/components/VideoCards';

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const horizontalRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: horizontalRef,
    offset: ["start start", "end end"],
  });

  // Overlapping right-to-left transitions for the horizontal stack (3 slides total)
  // Slide 1 (Part 02 Section Divider) is static in the background.
  // Slide 2 slides in from 0 to 0.5 scroll progress.
  // Slide 3 slides in from 0.5 to 1.0 scroll progress.
  const x2 = useTransform(scrollYProgress, [0, 0.5], ['100vw', '0vw']);
  const x3 = useTransform(scrollYProgress, [0.5, 1.0], ['100vw', '0vw']);

  return (
    <main style={{ backgroundColor: 'var(--off-white)' }}>
      {/* Opening Animation Preloader */}
      <OpeningAnimation onComplete={() => setLoadingComplete(true)} />

      {/* Fixed navbar overlay */}
      <Navbar />

      {/* 1. Hero Section - Sticky at the base */}
      <div className="sticky top-0 z-0 w-full">
        <HeroSection />
      </div>

      {/* 2. Section Divider - Part 01 - Sticky (slides on top of Hero) */}
      <div id="story" className="relative w-full" style={{ height: 0, margin: 0, padding: 0 }} />
      <div className="responsive-sticky-section z-10 w-full">
        <SectionDivider
          partNumber="01"
          title="The Dharavi Story"
          description="A million aspirations. Thousands of enterprises. A future for every family. One shared vision for a world-class, inclusive urban redevelopment"
          imageSrc="/images/dharavi-street.png"
          imageAlt="Black and white documentary photograph of a busy narrow street in Dharavi, Mumbai, showing workers and small shops"
          fullHeight={true}
        />
      </div>

      {/* 3. Slide 2: A City Within A City (Editorial Row 01 - Sticky vertical reveal) */}
      <div className="responsive-editorial-sticky z-20 w-full flex flex-col justify-center pt-[80px]" style={{ backgroundColor: 'var(--off-white)', boxShadow: '0 -20px 40px rgba(0,0,0,0.15)' }}>
        <EditorialRow
          ghostNumber="01"
          label="THE STORY"
          heading="A City Within A City"
          body="Dharavi, located at the geographic centre of Mumbai, is home to over one million people across 2.39 square kilometres. What outsiders label a slum, residents know as a self-organised economy generating an estimated USD 650 million annually."
          pullQuote="The residents did not come to Dharavi to be poor. They came to work."
          statNumber="650M"
          statLabel="USD estimated annual output"
          imageSrc="/images/dharavi-pottery.png"
          imageAlt="Black and white documentary photograph of workers in a pottery workshop in Dharavi, Mumbai"
          compact={true}
        />
      </div>

      {/* 4. Citizens Growth Timeline - Above Land of High Returns */}
      <div className="responsive-editorial-sticky w-full flex flex-col justify-center pt-[80px]" style={{ zIndex: 25, backgroundColor: 'var(--dark-navy)', boxShadow: '0 -20px 40px rgba(0,0,0,0.15)' }}>
        <GrowthTimeline compact={true} />
      </div>

      {/* 5. Slide 3: Land of High Returns (Data Panel - Sticky vertical reveal) */}
      <div className="responsive-editorial-sticky z-30 w-full flex flex-col justify-center pt-[80px]" style={{ backgroundColor: 'var(--dark-navy)', boxShadow: '0 -20px 40px rgba(0,0,0,0.15)' }}>
        <LineChartPanel compact={true} />
      </div>

      {/* 6. Horizontal Overlapping Slide Track - z-40 */}
      <div id="makeover" ref={horizontalRef} className="horizontal-track-container z-40" style={{ boxShadow: '0 -20px 40px rgba(0,0,0,0.15)' }}>
        <div className="horizontal-sticky-wrapper bg-off-white">
          {/* Slide 1: Part 02 Section Divider (Static initial slide in the background) */}
          <div className="horizontal-slide bg-off-white section-divider-slide" style={{ zIndex: 10 }}>
            <SectionDivider
              partNumber="02"
              title="Dharavi redevelopment project"
              description="It is a project to improve living conditions in Dharavi by providing safe, modern homes, better infrastructure, and a healthier environment-while protecting Dharavi's community, culture, and livelihoods"
              imageSrc="/images/dharavi-rooftop.png"
              imageAlt="Black and white photograph of dense residential buildings in Dharavi seen from a rooftop perspective"
              fullHeight={true}
            />
          </div>

          {/* Slide 2: Navbharat Mega Developer Section (slides in horizontally on top of Slide 1) */}
          <motion.div
            style={{ x: x2, zIndex: 20 }}
            className="horizontal-slide bg-off-white"
          >
            <div className="relative py-4 md:py-8 w-full">
              <span
                className="ghost-number"
                style={{
                  top: '10px',
                  left: 'clamp(24px, 5vw, 80px)',
                }}
              >
                02
              </span>
              <div
                className="max-w-editorial mx-auto pt-[40px] md:pt-[100px]"
                style={{
                  paddingLeft: 'clamp(24px, 5vw, 80px)',
                  paddingRight: 'clamp(24px, 5vw, 80px)',
                }}
              >
                {/* Logo Row - Full Width */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="relative w-[180px] h-[50px] flex-shrink-0 bg-transparent flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/nblogo.jpeg"
                      alt="Navbharat Logo"
                      width={160}
                      height={50}
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                  <div className="w-px h-10 bg-gray-200 flex-shrink-0" />
                  <div className="relative h-[55px] w-[140px] flex-shrink-0 bg-transparent flex items-center justify-center">
                    <Image
                      src="/images/sraa.jpeg"
                      alt="SRA Logo"
                      width={180}
                      height={90}
                      className="object-contain mix-blend-multiply"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                </div>


                <div className="flex flex-col gap-6">
                  <p
                    className="font-body m-0"
                    style={{
                      fontSize: 'clamp(16px, 1.5vw, 20px)',
                      lineHeight: 1.7,
                      color: 'var(--charcoal)',
                      maxWidth: '720px',
                    }}
                  >
                    Navbharat Mega Developers Private Limited is a Special Purpose Vehicle (SPV) between the Government of Maharashtra through the Dharavi Redevelopment Project (DRP) / Slum Rehabilitation Authority (SRA) and the Adani Group.
                  </p>
                  <span className="label-tag block" style={{ color: 'var(--nbt-gold)', fontWeight: 600 }}>
                    REDEVELOPMENT PARTNER
                  </span>
                  <p
                    className="font-body m-0"
                    style={{
                      fontSize: 'clamp(16px, 1.5vw, 20px)',
                      lineHeight: 1.7,
                      color: 'var(--charcoal)',
                      maxWidth: '720px',
                    }}
                  >
                    Navbharat Mega Developers aims to transform and revitalise Dharavi into a world-class township while preserving its vibrant community, rich culture, and entrepreneurial spirit.
                  </p>
                  <div
                    style={{ height: '2px', backgroundColor: 'var(--nbt-gold)', width: '60px' }}
                  />
                </div>

              </div>
            </div>
          </motion.div>

          {/* Slide 3: Community Structures Table (slides in horizontally on top of Slide 2) */}
          <motion.div
            style={{ x: x3, zIndex: 30 }}
            className="horizontal-slide bg-off-white"
          >
            <CoopTable compact={true} />
          </motion.div>
        </div>
      </div>

      {/* 7. Resume Vertical Flow */}
      <div className="relative z-40 w-full bg-off-white" style={{ boxShadow: '0 -20px 40px rgba(0,0,0,0.15)' }}>
        
        {/* Paper Trails - overlapping card stack in vertical flow */}
        <ClippingTimeline />

        {/* Dharavi Entrepreneurial Spirit - cottage industries grid in vertical flow */}
        <EntrepreneurialSpirit />

        <div id="naya-dharavi">
          <NayaDharaviSection />
        </div>
        
        {/* Dynamic Sector Profile Directory */}
        <DiversityCulture />

        {/* Swipeable Video Deck */}
        <VideoCards />

        {/* Redesigned About Section */}
        <AboutSection />
      </div>
    </main>
  );
}
