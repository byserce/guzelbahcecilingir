import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { CILINGIR_BUSINESS_NAME, CILINGIR_PHONE_NUMBER, CILINGIR_DOMAIN, CILINGIR_PHONE_LINK } from '@/lib/constants';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingContact from '@/components/layout/floating-contact';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: `Güzelbahçe Çilingir | 7/24 Acil Anahtarcı Servisi | ${CILINGIR_PHONE_NUMBER}`,
    template: `%s | ${CILINGIR_BUSINESS_NAME}`,
  },
  description: `Güzelbahçe'de acil çilingir mi arıyorsunuz? 7/24 nöbetçi anahtarcı servisimizle 15 dakikada kapınızdayız. Oto, kasa, kapı açma ve kilit değiştirme. Hemen arayın: ${CILINGIR_PHONE_NUMBER}`,
  keywords: [
    'Güzelbahçe çilingir', 
    'Güzelbahçe anahtarcı', 
    'Güzelbahçe acil çilingir',
    'Güzelbahçe nöbetçi çilingir',
    'Güzelbahçe 7/24 çilingir',
    'Güzelbahçe en yakın çilingir',
    'Güzelbahçe çilingir numarası',
    'Güzelbahçe oto çilingir',
    'Güzelbahçe kasa çilingiri',
    'Güzelbahçe çelik kapı açma',
    'Güzelbahçe kilit değiştirme',
    'Güzelbahçe kale kilit',
    'Yelki çilingir',
    'Kahramandere çilingir',
    'Yalı mahallesi çilingir'
  ],
  metadataBase: new URL(`https://${CILINGIR_DOMAIN}`),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: CILINGIR_BUSINESS_NAME,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Güzelbahçe',
      addressRegion: 'İzmir',
    },
    telephone: CILINGIR_PHONE_LINK.replace('tel:', ''),
    url: `https://${CILINGIR_DOMAIN}`,
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '₺₺',
    areaServed: 'Güzelbahçe, İzmir',
    contactPoint : {
      '@type' : 'ContactPoint',
      telephone : CILINGIR_PHONE_LINK.replace('tel:', ''),
      contactType : 'customer service'
    }
  };

  return (
    <html lang="tr" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <FloatingContact />
        <Toaster />
      </body>
    </html>
  );
}
