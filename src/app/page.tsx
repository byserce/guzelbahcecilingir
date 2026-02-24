import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import TrustBadges from '@/components/sections/trust-badges';
import Faq from '@/components/sections/faq';
import MapSection from '@/components/sections/map-section';
import NeighborhoodLinks from '@/components/sections/neighborhood-links';

export default function HomePage() {
  return (
    <>
      <Hero
        title="Güzelbahçe Acil Çilingir Servisi"
        subtitle="Kapıda mı kaldınız? Güzelbahçe'de 7/24 nöbetçi anahtarcı ekibimizle en yakın çilingir olarak 15 dakikada kapınızdayız!"
      />
      <TrustBadges />
      <Services />
      <NeighborhoodLinks />
      <Faq />
      <MapSection />
    </>
  );
}
