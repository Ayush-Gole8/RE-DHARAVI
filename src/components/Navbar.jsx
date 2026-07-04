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
            className="fixed inset-0 z-[55] flex flex-col items-center justify-center md:hidden"
            style={{ 
              backgroundColor: 'rgba(18, 4, 56, 0.98)',
              backdropFilter: 'blur(20px)'
            }}
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Logo in mobile menu */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              style={{ marginBottom: '40px' }}
            >
              <Image
                src="/images/logowhite-cropped.PNG"
                alt="Naya Dharavi Logo"
                width={200}
                height={36}
                style={{
                  width: 'auto',
                  height: '36px',
                }}
                className="object-contain"
              />
            </motion.div>

            {/* Menu List */}
            <ul className="list-none m-0 p-0 flex flex-col items-center gap-6 w-full max-w-[280px]">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  className="w-full text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-heading font-semibold text-xl uppercase text-white no-underline block py-3 transition-colors duration-200"
                    style={{ 
                      letterSpacing: '0.18em',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
