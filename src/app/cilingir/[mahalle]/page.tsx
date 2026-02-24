import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { neighborhoods, CILINGIR_BUSINESS_NAME, CILINGIR_PHONE_NUMBER } from '@/lib/constants';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import TrustBadges from '@/components/sections/trust-badges';
import Faq from '@/components/sections/faq';
import MapSection from '@/components/sections/map-section';
import CustomerReviews from '@/components/sections/customer-reviews';
import LocalExpertise from '@/components/sections/local-expertise';

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
  
  const formattedMahalle = mahalle.charAt(0).toUpperCase() + mahalle.slice(1);

  return {
    title: `${formattedMahalle} Çilingir & Anahtarcı - 7/24 Acil | ${CILINGIR_PHONE_NUMBER}`,
    description: `${formattedMahalle} mahallesinde acil çilingir ve anahtarcı. 7/24 nöbetçi servisimizle kapı açma, kilit değişimi, oto çilingir hizmetleri. En yakın ekip 15 dakikada adreste. Arayın: ${CILINGIR_PHONE_NUMBER}`,
    keywords: [`${formattedMahalle} çilingir`, `${formattedMahalle} anahtarcı`, `acil çilingir ${formattedMahalle}`, `nöbetçi çilingir ${formattedMahalle}`, `en yakın çilingir ${formattedMahalle}`, `${formattedMahalle} oto çilingir`, "Güzelbahçe çilingir"],
  };
}

export default function MahallePage({ params }: { params: { mahalle: string } }) {
  const mahalle = decodeURIComponent(params.mahalle.toLowerCase());

  if (!neighborhoods.includes(mahalle)) {
    notFound();
  }

  const formattedMahalle = mahalle.charAt(0).toUpperCase() + mahalle.slice(1);

  return (
    <>
      <Hero
        title={`${formattedMahalle} Çilingir Servisi - 7/24 Acil`}
        subtitle={`Güzelbahçe ${formattedMahalle} mahallesinde kapıda mı kaldınız? 15 dakikada yanınızdayız. Hızlı, güvenilir ve hasarsız çilingir hizmeti.`}
        altText={`${formattedMahalle}, Güzelbahçe çilingir ve anahtarcı hizmeti`}
      />
      <TrustBadges />
      <Services />
      <LocalExpertise neighborhood={mahalle} />
      <CustomerReviews />
      <Faq />
      <MapSection />
    </>
  );
}
