'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Home', href: '#cover' },
  { label: 'Story', href: '#story' },
  { label: 'DRP', href: '#makeover' },
  { label: 'Naya Dharavi', href: '#naya-dharavi' },
  { label: 'About', href: '#about' },
  { label: 'Resident coordination', href: '/resident-coordination' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    setMobileOpen(false);
    const isHomePage = typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '');

    if (href.startsWith('#')) {
      if (isHomePage) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        e.preventDefault();
        window.location.href = '/' + href;
      }
    }
  };

  return (
    <nav
      id="main-nav"
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Background layer: White always, with blur and shadow */}
      <div
        className="absolute inset-0 z-0 transition-all duration-300"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
        }}
      />
      <div
        className="relative z-10 max-w-editorial mx-auto flex items-center justify-between py-3 md:py-4"
        style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}
      >
        {/* Logo — dynamic switch depending on mobile menu overlay state to match contrast */}
        <a
          href="#cover"
          onClick={(e) => handleNavClick(e, '#cover')}
          className="flex items-center no-underline"
          aria-label="Naya Dharavi — back to top"
          id="site-logo-link"
          style={{ lineHeight: 0 }}
        >
          <Image
            src={mobileOpen ? "/images/logowhite-cropped.PNG" : "/images/brand-logo-cropped.PNG"}
            alt="Naya Dharavi Logo"
            width={197}
            height={36}
            style={{
              width: 'auto',
              height: 'clamp(28px, 4vw, 36px)',
            }}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop Links — Always dark indigo on the white navbar */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-heading font-bold uppercase no-underline transition-colors duration-200"
                style={{ 
                  fontSize: '13px', 
                  letterSpacing: '0.1em',
                  color: 'var(--brand-indigo)',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 bg-transparent border-none cursor-pointer z-[60]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          id="hamburger-menu"
        >
          <span className="block w-6 h-[2px] transition-all duration-300"
            style={{ 
              transform: mobileOpen ? 'rotate(45deg) translateY(8px)' : 'none',
              backgroundColor: mobileOpen ? '#ffffff' : 'var(--brand-indigo)'
            }} />
          <span className="block w-6 h-[2px] transition-all duration-300"
            style={{ 
              opacity: mobileOpen ? 0 : 1,
              backgroundColor: mobileOpen ? '#ffffff' : 'var(--brand-indigo)'
            }} />
          <span className="block w-6 h-[2px] transition-all duration-300"
            style={{ 
              transform: mobileOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
              backgroundColor: mobileOpen ? '#ffffff' : 'var(--brand-indigo)'
            }} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[55] flex flex-col justify-between md:hidden"
            style={{ 
              backgroundColor: 'var(--dark-navy)',
              backgroundImage: 'radial-gradient(circle at 100% 0%, rgba(140,0,68,0.2) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(217,110,175,0.1) 0%, transparent 50%)',
              backdropFilter: 'blur(20px)'
            }}
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Top spacer for close button */}
            <div className="h-[80px] shrink-0" />

            <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 overflow-y-auto no-scrollbar pb-8">
              {/* Menu List */}
              <ul className="list-none m-0 p-0 flex flex-col items-stretch w-full">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    className="w-full relative group"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="relative flex items-center justify-between font-heading font-semibold text-lg sm:text-xl uppercase text-white/80 no-underline py-5 transition-all duration-300 hover:text-white hover:pl-2"
                      style={{ 
                        letterSpacing: '0.12em',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
                      }}
                    >
                      <span className="flex items-center gap-5">
                        <span 
                          className="font-display text-3xl font-light mt-1 transition-colors duration-300"
                          style={{ color: 'var(--brand-magenta)' }}
                        >
                          0{i + 1}
                        </span>
                        <span>{link.label}</span>
                      </span>
                      <svg 
                        className="w-4 h-4 text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/60" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Menu Footer */}
            <motion.div
              className="w-full pb-8 pt-6 px-8 flex flex-col items-center sm:items-start border-t"
              style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Image
                src="/images/logowhite-cropped.PNG"
                alt="Naya Dharavi Logo"
                width={160}
                height={30}
                style={{ width: 'auto', height: '24px', opacity: 0.9 }}
                className="object-contain mb-3"
              />
              <p className="font-ui text-[10px] uppercase tracking-[0.15em] text-white/40 text-center sm:text-left m-0 leading-relaxed">
                Naya Dharavi © 2026<br/>
                Independent Citizen Archive
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
