import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { neighborhoods, CILINGIR_BUSINESS_NAME, CILINGIR_PHONE_NUMBER, CILINGIR_DOMAIN } from '@/lib/constants';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import TrustBadges from '@/components/sections/trust-badges';
import Faq from '@/components/sections/faq';
import MapSection from '@/components/sections/map-section';
import CustomerReviews from '@/components/sections/customer-reviews';
import LocalExpertise from '@/components/sections/local-expertise';
import NeighborhoodLinks from '@/components/sections/neighborhood-links';
import AboutTeaser from '@/components/sections/about-teaser';

export async function generateStaticParams() {
  return neighborhoods.map((mahalle) => ({
    mahalle,
  }));
}

export async function generateMetadata({ params }: { params: { mahalle: string } }): Promise<Metadata> {
  const mahalle = decodeURIComponent(params.mahalle.toLowerCase());

  if (!neighborhoods.includes(mahalle)) {
    return {};
  }
  
  const formattedMahalle = mahalle.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const title = `📞 ${formattedMahalle} Çilingir | ${CILINGIR_PHONE_NUMBER} | 7/24 Acil Servis`;
  const description = `${formattedMahalle} mahallesinde acil çilingir ve nöbetçi anahtarcı. 7/24 servisimizle 15 dakikada kapı açma, kilit değişimi, oto çilingir. Hemen arayın: ${CILINGIR_PHONE_NUMBER}`;

  return {
    title,
    description,
    keywords: [`${formattedMahalle} çilingir`, `${formattedMahalle} anahtarcı`, `acil çilingir ${formattedMahalle}`, `nöbetçi çilingir ${formattedMahalle}`, `en yakın çilingir ${formattedMahalle}`, `${formattedMahalle} oto çilingir`, "Güzelbahçe çilingir", `${formattedMahalle} anahtar teslim`],
    alternates: {
      canonical: `/cilingir/${mahalle}`,
    },
    openGraph: {
      title,
      description,
      url: `/cilingir/${mahalle}`,
      siteName: CILINGIR_BUSINESS_NAME,
      images: [ { url: `https://${CILINGIR_DOMAIN}/og-image.png` } ],
      locale: 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://${CILINGIR_DOMAIN}/og-image.png`],
    },
  };
}

export default function MahallePage({ params }: { params: { mahalle: string } }) {
  const mahalle = decodeURIComponent(params.mahalle.toLowerCase());

  if (!neighborhoods.includes(mahalle)) {
    notFound();
  }

  const formattedMahalle = mahalle.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const neighborhoodJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Locksmith',
    name: `${formattedMahalle} Çilingir - ${CILINGIR_BUSINESS_NAME}`,
    description: `${formattedMahalle} mahallesinde 7/24 acil çilingir ve anahtarcı hizmeti.`,
    telephone: CILINGIR_PHONE_NUMBER,
    url: `https://${CILINGIR_DOMAIN}/cilingir/${mahalle}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Güzelbahçe',
      addressRegion: 'İzmir',
      addressCountry: 'TR',
      streetAddress: `${formattedMahalle} Mahallesi`
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${formattedMahalle} Mahallesi`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(neighborhoodJsonLd) }}
      />
      <Hero
        title={`${formattedMahalle} Çilingir Servisi - 7/24 Acil`}
        subtitle={`Güzelbahçe ${formattedMahalle} mahallesinde kapıda mı kaldınız? 15 dakikada yanınızdayız. Hızlı, güvenilir ve hasarsız çilingir hizmeti.`}
        altText={`${formattedMahalle}, Güzelbahçe çilingir ve anahtarcı hizmeti`}
      />
      <TrustBadges />
      <Services />
      <AboutTeaser />
      <LocalExpertise neighborhood={mahalle} />
      <NeighborhoodLinks />
      <CustomerReviews />
      <Faq />
      <MapSection />
    </>
  );
}
