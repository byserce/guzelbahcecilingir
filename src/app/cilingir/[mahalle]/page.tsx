import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { neighborhoods, CILINGIR_BUSINESS_NAME } from '@/lib/constants';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import TrustBadges from '@/components/sections/trust-badges';
import Faq from '@/components/sections/faq';
import MapSection from '@/components/sections/map-section';

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
    title: `${formattedMahalle} Çilingir - 7/24 Hızlı Servis`,
    description: `${formattedMahalle} mahallesinde kapıda mı kaldınız? ${CILINGIR_BUSINESS_NAME} ekibi 15 dakikada adresinizde. Hemen arayın!`,
    keywords: [`${formattedMahalle} çilingir`, `${formattedMahalle} anahtarcı`, `acil çilingir ${formattedMahalle}`, "Güzelbahçe çilingir"],
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
        title={`${formattedMahalle} Çilingir`}
        subtitle={`Güzelbahçe ${formattedMahalle} mahallesinde 7/24 acil çilingir ve anahtarcı. 15 dakikada yanınızdayız!`}
      />
      <TrustBadges />
      <Services />
      <Faq />
      <MapSection />
    </>
  );
}
