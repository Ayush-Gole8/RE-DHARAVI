'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'hi', label: 'हिंदी (Hindi)', short: 'हिं' },
  { code: 'mr', label: 'मराठी (Marathi)', short: 'म' },
];

export default function LanguageTranslator() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const getActiveLanguage = () => {
      if (typeof document === 'undefined') return 'en';
      const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
      if (match && match[1]) {
        return match[1];
      }
      return 'en';
    };
    setActiveLang(getActiveLanguage());
  }, []);

  const handleLanguageChange = (langCode) => {
    setActiveLang(langCode);
    setIsOpen(false);

    // Set cookie for both current domain and apex domain
    const cookieVal = langCode === 'en' ? '' : `/en/${langCode}`;
    document.cookie = `googtrans=${cookieVal}; path=/;`;
    document.cookie = `googtrans=${cookieVal}; path=/; domain=${window.location.hostname};`;

    // Try to trigger the change event on Google's native select element
    const selectEl = document.querySelector('.goog-te-combo');
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event('change'));
    } else {
      // Reload page if Google Translate combo is not yet loaded,
      // so it loads with the new cookie setting
      window.location.reload();
    }
  };

  if (!mounted) return null;

  const currentLangObj = LANGUAGES.find((l) => l.code === activeLang) || LANGUAGES[0];

  return (
    <>
      {/* Hidden container required for Google Translate script initialization */}
      <div id="google_translate_element" style={{ display: 'none' }} className="hidden" />

      {/* Custom Translator Widget */}
      <div className="fixed bottom-6 right-6 z-[9999]">
        <div className="relative">
          
          {/* Dropdown Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute bottom-[calc(100%+10px)] right-0 w-48 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                style={{
                  backgroundColor: 'rgba(18, 4, 56, 0.92)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                <div className="py-2 px-1 flex flex-col gap-1">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-[#C9A8C4]/60 font-heading">
                    Translate Website
                  </div>
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-xl transition-all duration-200 text-left font-heading ${
                        activeLang === lang.code
                          ? 'bg-[#8C0044] text-white font-bold'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{lang.label}</span>
                      {activeLang === lang.code && (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Trigger Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2.5 h-12 px-4 rounded-full shadow-lg border border-white/10 text-white cursor-pointer transition-all duration-300 font-heading text-xs font-bold uppercase tracking-wider"
            style={{
              background: 'linear-gradient(135deg, rgba(140, 0, 68, 0.9) 0%, rgba(28, 8, 85, 0.95) 100%)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 32px 0 rgba(140, 0, 68, 0.25)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Translation Icon */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#C9A8C4]"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            
            <span>{currentLangObj.label}</span>

            {/* Chevron Icon */}
            <motion.svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/60"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <polyline points="6 9 12 15 18 9" />
            </motion.svg>
          </motion.button>
          
        </div>
      </div>
    </>
  );
}
