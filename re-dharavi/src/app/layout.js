import './globals.css';
import { Poppins, Six_Caps, Khand, Martel_Sans } from 'next/font/google';
import Script from 'next/script';
import LanguageTranslator from '@/components/LanguageTranslator';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const sixCaps = Six_Caps({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-six-caps',
  display: 'swap',
});

const khand = Khand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-khand',
  display: 'swap',
});

const martelSans = Martel_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  variable: '--font-martel-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Naya Dharavi',
  description:
    'A scroll-driven editorial website documenting Dharavi, Mumbai\'s informal economy and community resistance to large-scale redevelopment.',
  openGraph: {
    title: 'Naya Dharavi',
    description:
      'A scroll-driven editorial website documenting Dharavi, Mumbai\'s informal economy and community resistance to large-scale redevelopment.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en"
      className={`${poppins.variable} ${sixCaps.variable} ${khand.variable} ${martelSans.variable}`}
    >
      <body>
        {children}
        <LanguageTranslator />
        
        {/* Google Translate Callback Init */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            window.googleTranslateElementInit = function() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,hi,mr',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              }, 'google_translate_element');
            }
          `}
        </Script>
        
        {/* Google Translate Script */}
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
