import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { CILINGIR_BUSINESS_NAME, CILINGIR_PHONE_NUMBER, CILINGIR_DOMAIN } from '@/lib/constants';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingContact from '@/components/layout/floating-contact';

export const metadata: Metadata = {
  title: {
    default: `Güzelbahçe Çilingir | 7/24 Acil Nöbetçi Anahtarcı Servisi`,
    template: `%s | ${CILINGIR_BUSINESS_NAME}`,
  },
  description: `Güzelbahçe çilingir servisi: 7/24 acil ve nöbetçi anahtarcı. En yakın çilingir ekibimiz 15 dakikada adresinizde. Oto, kasa, kapı çilingir ve kilit değiştirme hizmetleri. Telefon numaramız: ${CILINGIR_PHONE_NUMBER}`,
  keywords: ['Güzelbahçe çilingir', 'Güzelbahçe anahtarcı', 'acil çilingir', 'nöbetçi çilingir', 'en yakın çilingir', 'oto çilingir', 'kasa çilingiri', 'kilit değiştirme', 'çilingir numarası'],
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
    telephone: '+905518901979',
    url: `https://${CILINGIR_DOMAIN}`,
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '₺₺',
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
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
