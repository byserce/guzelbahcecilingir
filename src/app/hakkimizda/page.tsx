import type { Metadata } from 'next';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CILINGIR_BUSINESS_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: `${CILINGIR_BUSINESS_NAME} olarak Güzelbahçe ve çevresinde 7/24 güvenilir, hızlı ve profesyonel çilingir hizmeti sunuyoruz. Uzman ekibimiz ve hasarsız işlem garantimizle tanışın.`
};

export default function AboutUsPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <div>
      {heroImage && (
         <div className="relative h-64 bg-slate-800">
            <Image
              src={heroImage.imageUrl}
              alt={`${CILINGIR_BUSINESS_NAME} Hakkında - Profesyonel Ekipmanlar`}
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl font-black text-white drop-shadow-lg md:text-6xl">Hakkımızda</h1>
            </div>
         </div>
      )}
      <div className="container py-12 md:py-20">
        <div className="prose mx-auto max-w-3xl">
          <h2>Güvenilir, Hızlı ve Profesyonel Çilingir Hizmeti</h2>
          <p>
            {CILINGIR_BUSINESS_NAME} olarak, Güzelbahçe ve çevresindeki tüm mahallelerde yaşayan siz değerli müşterilerimize 7 gün 24 saat kesintisiz çilingir ve anahtarcı hizmeti sunmaktan gurur duyuyoruz. Yılların verdiği tecrübe ve müşteri memnuniyeti odaklı çalışma anlayışımızla, en zor anlarınızda bir telefon kadar yakınınızdayız.
          </p>
          <p>
            Kapıda kalmak, anahtarı kaybetmek veya kilitlerin arızalanması gibi stresli durumlarda, modern ekipmanlarımız ve uzman kadromuzla hızlı, hasarsız ve güvenilir çözümler üretiyoruz. Amacımız, sadece kapınızı açmak değil, aynı zamanda kilit göbeği (barel) değişimi gibi hizmetlerle güvenliğinizi sağlayarak huzur içinde yaşamanıza katkıda bulunmaktır.
          </p>
          
          <h2>Neden Biz?</h2>
          <ul>
            <li><strong>7/24 Acil Servis:</strong> Gece veya gündüz, bayram veya tatil demeden her an hizmetinizdeyiz.</li>
            <li><strong>15 Dakikada Ulaşım:</strong> Güzelbahçe'nin her noktasına motorlu ekiplerimizle en kısa sürede ulaşıyoruz.</li>
            <li><strong>Hasarsız İşlem Garantisi:</strong> Kapınıza ve kilidinize zarar vermeden, profesyonel maymuncuk ve ekipmanlarla çalışıyoruz.</li>
            <li><strong>Uzman Kadro:</strong> Tüm ekibimiz, çilingirlik mesleğinde deneyimli ve güvenilir ustalardan oluşmaktadır.</li>
            <li><strong>Şeffaf Fiyatlandırma:</strong> Hizmet öncesi fiyat bilgisi vererek kötü sürprizlerle karşılaşmanızı önlüyoruz.</li>
          </ul>

          <p>
            Güvenliğiniz bizim önceliğimizdir. {CILINGIR_BUSINESS_NAME}'ni tercih ettiğiniz için teşekkür ederiz.
          </p>
        </div>
      </div>
    </div>
  );
}
