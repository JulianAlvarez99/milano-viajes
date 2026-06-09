import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://milanoviajes.com'),
  title: 'Milano Viajes — Tu próxima aventura comienza aquí',
  description:
    'Agencia de viajes con 30 años de experiencia. Destinos nacionales e internacionales para todos. Consultá por tu próximo viaje por WhatsApp.',
  keywords: [
    'agencia de viajes', 'viajes Argentina', 'turismo internacional',
    'paquetes turísticos', 'viajes Bariloche', 'viajes Cancún', 'Milano Viajes',
  ],
  openGraph: {
    title: 'Milano Viajes — Tu próxima aventura comienza aquí',
    description: 'Agencia de viajes con 30 años de experiencia. Destinos nacionales e internacionales para todos.',
    type: 'website',
    locale: 'es_AR',
    siteName: 'Milano Viajes',
    images: [
      {
        url: '/images/hero/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Milano Viajes — Destinos increíbles te esperan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milano Viajes — Tu próxima aventura comienza aquí',
    description: 'Agencia de viajes con 30 años de experiencia.',
    images: ['/images/hero/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
