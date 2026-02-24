import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { neighborhoods, CILINGIR_BUSINESS_NAME, CILINGIR_PHONE_NUMBER } from '@/lib/constants';
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
    title: `${formattedMahalle} Çilingir & Anahtarcı - 15 Dakikada Acil Servis`,
    description: `${formattedMahalle} mahallesinde acil çilingir mi arıyorsunuz? 7/24 anahtarcı servisimizle kilit değişimi, oto çilingir ve kapı açma hizmetleri. Hemen arayın: ${CILINGIR_PHONE_NUMBER}`,
    keywords: [`${formattedMahalle} çilingir`, `${formattedMahalle} anahtarcı`, `acil çilingir ${formattedMahalle}`, `nöbetçi çilingir ${formattedMahalle}`, "Güzelbahçe çilingir"],
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
        title={`${formattedMahalle} Çilingir Servisi`}
        subtitle={`Güzelbahçe ${formattedMahalle} mahallesinde 7/24 acil ve nöbetçi çilingir. En yakın anahtarcı ekibimiz 15 dakikada yanınızda!`}
      />
      <TrustBadges />
      <Services />
      <Faq />
      <MapSection />
    </>
  );
}
