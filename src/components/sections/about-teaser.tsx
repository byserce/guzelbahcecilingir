import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CILINGIR_BUSINESS_NAME } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function AboutTeaser() {
  const ownerImage = PlaceHolderImages.find((img) => img.id === 'about-us-owner');

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl mb-6">
              Güzelbahçe'nin Yerel ve Güvenilir Çilingiri
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {CILINGIR_BUSINESS_NAME} olarak, ben ve ekibim, Güzelbahçe ve çevresindeki tüm mahallelerde yaşayan siz değerli müşterilerimize 7 gün 24 saat kesintisiz çilingir ve anahtarcı hizmeti sunmaktan gurur duyuyoruz.
            </p>
            <p className="text-muted-foreground mb-4">
              Kapıda kalmak, anahtarı kaybetmek veya kilitlerin arızalanması gibi stresli durumlarda, son teknoloji maymuncuk ve modern ekipmanlarımızla hızlı, hasarsız ve güvenilir çözümler üretiyoruz. Amacımız sadece kapınızı açmak değil, aynı zamanda kilit göbeği (barel) değişimi, akıllı kilit montajı gibi hizmetlerle güvenliğinizi en üst seviyeye çıkararak huzur içinde yaşamanıza katkıda bulunmaktır.
            </p>
             <p className="text-muted-foreground mb-6">
              Güzelbahçe'nin yerel işletmesi olarak, bölgenin her sokağını biliyor, acil durumlarda motorlu ekiplerimizle en kısa sürede yanınızda oluyoruz. Güvenliğiniz bizim önceliğimizdir.
            </p>
            <Button asChild size="lg">
                <Link href="/hakkimizda">
                    Hakkımızda
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
          </div>
          <div className="relative aspect-[4/5] h-[500px] mx-auto hidden md:block">
            {ownerImage && (
                <Image
                    src={ownerImage.imageUrl}
                    alt="Güzelbahçe Çilingir - Güvenilir Usta Atölyesi"
                    fill
                    className="object-cover rounded-lg shadow-xl"
                    data-ai-hint={ownerImage.imageHint}
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
