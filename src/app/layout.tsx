import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { CILINGIR_BUSINESS_NAME, CILINGIR_PHONE_NUMBER, CILINGIR_DOMAIN, CILINGIR_PHONE_LINK, CILINGIR_ADDRESS, neighborhoods } from '@/lib/constants';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingContact from '@/components/layout/floating-contact';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: `📞 Güzelbahçe Çilingir | 0551 890 19 79 | 7/24 Acil Anahtarcı`,
    template: `%s | ${CILINGIR_BUSINESS_NAME} - 0551 890 19 79`,
  },
  description: `Güzelbahçe'de acil çilingir ve nöbetçi anahtarcı. 7/24 kesintisiz servisimizle 15 dakikada yanınızdayız. Oto çilingir, kasa açma, kilit ve göbek değişimi. Hemen arayın: ${CILINGIR_PHONE_NUMBER}`,
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
    ...neighborhoods.map(n => `${n} çilingir`),
    ...neighborhoods.map(n => `${n} anahtarcı`),
  ],
  metadataBase: new URL(`https://${CILINGIR_DOMAIN}`),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: {
        default: `📞 Güzelbahçe Çilingir | 0551 890 19 79 | 7/24 Acil Anahtarcı`,
        template: `%s | ${CILINGIR_BUSINESS_NAME}`,
    },
    description: 'Güzelbahçe\'de 7/24 acil çilingir ve anahtarcı servisi. 15 dakikada yanınızdayız. Hemen arayın: 0551 890 19 79',
    url: `https://${CILINGIR_DOMAIN}`,
    siteName: CILINGIR_BUSINESS_NAME,
    images: [
      {
        url: `https://${CILINGIR_DOMAIN}/og-image.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
   twitter: {
    card: 'summary_large_image',
    title: {
      default: `📞 Güzelbahçe Çilingir | 0551 890 19 79 | 7/24 Acil Anahtarcı`,
      template: `%s | ${CILINGIR_BUSINESS_NAME}`,
    },
    description: 'Güzelbahçe\'de 7/24 acil çilingir ve anahtarcı servisi. 15 dakikada yanınızdayız.',
    images: [`https://${CILINGIR_DOMAIN}/og-image.png`],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
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
    areaServed: [
        {
          "@type": "City",
          "name": "Güzelbahçe",
          "@id": "https://www.wikidata.org/wiki/Q1018944"
        },
        ...neighborhoods.map(n => ({
            "@type": "AdministrativeArea",
            "name": `${n.charAt(0).toUpperCase() + n.slice(1)} Mahallesi`
        }))
    ],
    contactPoint : {
      '@type' : 'ContactPoint',
      telephone : CILINGIR_PHONE_LINK.replace('tel:', ''),
      contactType : 'customer service',
      availableLanguage: ['Turkish']
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Çilingir Hizmetleri',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Acil Çelik Kapı Açma' }},
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Oto Çilingir Hizmeti' }},
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kasa Çilingir Hizmeti' }},
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kilit ve Göbek Değişimi' }},
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Akıllı Kilit Montajı' }},
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kale Kilit Yetkili Servis' }}
      ]
    }
  };

  return (
    <html lang="tr" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16626277724" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16626277724');
          `}
        </Script>
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
