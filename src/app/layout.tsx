import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { CILINGIR_BUSINESS_NAME, CILINGIR_PHONE_NUMBER, CILINGIR_DOMAIN, CILINGIR_PHONE_LINK, CILINGIR_ADDRESS } from '@/lib/constants';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingContact from '@/components/layout/floating-contact';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: `Güzelbahçe Çilingir & Anahtarcı | 7/24 Acil Servis | ${CILINGIR_PHONE_NUMBER}`,
    template: `%s | ${CILINGIR_BUSINESS_NAME}`,
  },
  description: `Güzelbahçe'de acil çilingir ve anahtarcı. 7/24 nöbetçi servisimizle 15 dakikada kapınızdayız. Oto, kasa, kapı açma, kilit değiştirme. Arayın: ${CILINGIR_PHONE_NUMBER}`,
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
    'Güzelbahçe göbek değişimi',
    'Güzelbahçe kale kilit',
    'Yelki çilingir',
    'Kahramandere çilingir',
    'Yalı mahallesi çilingir',
    'Siteler mahallesi anahtarcı',
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
    image: `https://${CILINGIR_DOMAIN}/logo.png`,
    '@id': `https://${CILINGIR_DOMAIN}`,
    url: `https://${CILINGIR_DOMAIN}`,
    telephone: CILINGIR_PHONE_LINK.replace('tel:', ''),
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Yalı Mah. 54. Sok. No:12',
      addressLocality: 'Güzelbahçe',
      addressRegion: 'İzmir',
      postalCode: '35310',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.3783,
      longitude: 26.8844,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
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
