import './globals.css';
import { Poppins, Six_Caps, Khand, Martel_Sans } from 'next/font/google';

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
      <body>{children}</body>
    </html>
  );
}
