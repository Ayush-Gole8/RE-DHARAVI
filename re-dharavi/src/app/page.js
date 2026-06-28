'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
import NavbharatUpdates from '@/components/NavbharatUpdates';

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
          description="A million lives. A thousand trades. One fiercely contested square mile holding the soul of Mumbai."
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
      <div className="relative z-25 w-full bg-off-white" style={{ boxShadow: '0 -20px 40px rgba(0,0,0,0.15)' }}>
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
          <div className="horizontal-slide bg-off-white" style={{ zIndex: 10 }}>
            <SectionDivider
              partNumber="02"
              title="Makeover or Takeover"
              description="When global capital meets local resilience, whose vision of the future prevails?"
              imageSrc="/images/dharavi-rooftop.png"
              imageAlt="Black and white photograph of dense residential buildings in Dharavi seen from a rooftop perspective"
              fullHeight={true}
            />
          </div>

          {/* Slide 2: Redevelopment Editorial Row (slides in horizontally on top of Slide 1) */}
          <motion.div
            style={{ x: x2, zIndex: 20 }}
            className="horizontal-slide bg-off-white"
          >
            <EditorialRow
              reversed={true}
              ghostNumber="02"
              label="REDEVELOPMENT"
              heading="The ₹15,000 Crore Question"
              body="In 2004, the Maharashtra government announced the Dharavi Redevelopment Project, inviting global developers to bid on five sectors. The plan promised free housing for residents but failed to account for the 57 categories of livelihoods operating within the informal economy."
              pullQuote="Redevelopment was never designed with residents - it was designed around them."
              statNumber="57"
              statLabel="distinct livelihood categories threatened"
              imageSrc="/images/dharavi-street.png"
              imageAlt="Documentary photograph showing Dharavi sector zones proposed for redevelopment"
              imageCaption="Sector IV - Proposed Redevelopment Zones"
              splitCompact={true}
            />
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

        {/* Dedicated News Section */}
        <NavbharatUpdates />

        {/* Redesigned About Section */}
        <AboutSection />
      </div>
    </main>
  );
}
