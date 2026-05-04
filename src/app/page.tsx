import { Metadata } from 'next';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import TrustBadges from '@/components/sections/trust-badges';
import Faq from '@/components/sections/faq';
import MapSection from '@/components/sections/map-section';
import NeighborhoodLinks from '@/components/sections/neighborhood-links';
import CustomerReviews from '@/components/sections/customer-reviews';
import AboutTeaser from '@/components/sections/about-teaser';
import { CILINGIR_PHONE_NUMBER } from '@/lib/constants';

export const metadata: Metadata = {
  title: `📞 Güzelbahçe Çilingir | 0551 890 19 79 | 7/24 Acil Anahtarcı`,
  description: `Güzelbahçe'de acil çilingir ve anahtarcı hizmeti. 7/24 nöbetçi servisimizle 15 dakikada yanınızdayız. Oto, kasa, kapı açma, kilit değiştirme. Hemen arayın: ${CILINGIR_PHONE_NUMBER}`,
};

export default function HomePage() {
  return (
    <>
      <Hero
        title="Güzelbahçe 7/24 Acil Çilingir"
        subtitle="Kapıda mı kaldınız? Güzelbahçe'de nöbetçi anahtarcı ekibimizle en yakın çilingir olarak 15 dakikada kapınızdayız!"
        altText="Güzelbahçe çilingir servisi anahtarlar ve kilitler"
      />
      <TrustBadges />
      <Services />
      <AboutTeaser />
      <NeighborhoodLinks />
      <CustomerReviews />
      <Faq />
      <MapSection />
    </>
  );
}
