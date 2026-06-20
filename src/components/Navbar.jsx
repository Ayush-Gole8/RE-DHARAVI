'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Home', href: '#cover' },
  { label: 'Story', href: '#story' },
  { label: 'Makeover', href: '#makeover' },
  { label: 'Naya Dharavi', href: '#naya-dharavi' },
  { label: 'About', href: '#about' },
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
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      id="main-nav"
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(18, 4, 56, 0.55)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div
        className="max-w-editorial mx-auto flex items-center justify-between py-3 md:py-4"
        style={{ paddingLeft: 'clamp(24px, 5vw, 80px)', paddingRight: 'clamp(24px, 5vw, 80px)' }}
      >
        {/* SVG Logo — always dark mode in navbar (bg is always dark/gradient) */}
        <a
          href="#cover"
          onClick={(e) => handleNavClick(e, '#cover')}
          className="flex items-center no-underline"
          aria-label="Naya Dharavi — back to top"
          id="site-logo-link"
          style={{ lineHeight: 0 }}
        >
          <Image
            src="/images/brand-logo.PNG"
            alt="Naya Dharavi Logo"
            width={160}
            height={35}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-heading font-bold uppercase text-white no-underline hover:opacity-60 transition-opacity duration-200"
                style={{ fontSize: '13px', letterSpacing: '0.1em' }}
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
          <span className="block w-6 h-[2px] bg-white transition-all duration-300"
            style={{ transform: mobileOpen ? 'rotate(45deg) translateY(5px)' : 'none' }} />
          <span className="block w-6 h-[2px] bg-white transition-all duration-300"
            style={{ opacity: mobileOpen ? 0 : 1 }} />
          <span className="block w-6 h-[2px] bg-white transition-all duration-300"
            style={{ transform: mobileOpen ? 'rotate(-45deg) translateY(-5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[55] flex flex-col items-center justify-center md:hidden"
            style={{ background: 'var(--gradient-brand)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo in mobile menu */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              style={{ marginBottom: '48px' }}
            >
              <Image
                src="/images/brand-logo.PNG"
                alt="Naya Dharavi Logo"
                width={200}
                height={43}
                className="object-contain"
              />
            </motion.div>

            <ul className="list-none m-0 p-0 flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.3 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-heading font-bold text-2xl uppercase text-white no-underline hover:opacity-60 transition-opacity duration-200"
                    style={{ letterSpacing: '0.1em' }}
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
